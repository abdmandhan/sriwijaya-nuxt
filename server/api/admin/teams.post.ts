import { z } from 'zod'
import { slugify } from '~~/server/utils/string'

const bodySchema = z.object({
    name: z.string().min(1),
    image: z.string().optional(),
    image_card: z.string().optional().nullable(),
    email: z.string().email().optional().nullable(),
    linkedin: z.string().url().optional().nullable(),
    description: z.string().optional().nullable(),
    role_id: z.number().int().positive(),
    educations: z.array(z.string()).optional(),
    bar_admissions: z.array(z.string()).optional(),
})

export default defineEventHandler(async (event) => {
    try {
        // Ensure user is authenticated
        await requireUserSession(event)

        const body = await readValidatedBody(event, bodySchema.parse)

        // Check if role exists
        const role = await prisma.roles.findUnique({
            where: { id: body.role_id },
        })

        if (!role) {
            throw createError({
                status: 404,
                message: 'Role not found',
            })
        }

        // Check if slug already exists
        const existingTeam = await prisma.teams.findUnique({
            where: { slug: slugify(body.name) },
        })

        if (existingTeam) {
            throw createError({
                status: 400,
                message: 'Team with this slug already exists',
            })
        }

        // Create team
        const team = await prisma.teams.create({
            data: {
                slug: slugify(body.name),
                name: body.name,
                image: body.image || '',
                image_card: body.image_card?.trim() ? body.image_card : null,
                email: body.email,
                linkedin: body.linkedin,
                description: body.description,
                role_id: body.role_id,
            },
        })

        // Create educations if provided
        if (body.educations && body.educations.length > 0) {
            await prisma.team_educations.createMany({
                data: body.educations.map((education) => ({
                    team_id: team.id,
                    education,
                })),
            })
        }

        // Create bar_admissions if provided
        if (body.bar_admissions && body.bar_admissions.length > 0) {
            await prisma.team_bar_admissions.createMany({
                data: body.bar_admissions.map((bar_admission) => ({
                    team_id: team.id,
                    bar_admission,
                })),
            })
        }

        // Fetch created team with related data
        const [educations, barAdmissions] = await Promise.all([
            prisma.team_educations.findMany({
                where: { team_id: team.id },
                orderBy: { education: 'asc' },
            }),
            prisma.team_bar_admissions.findMany({
                where: { team_id: team.id },
                orderBy: { bar_admission: 'asc' },
            }),
        ])

        return {
            ...team,
            educations,
            bar_admissions: barAdmissions,
        }

    } catch (error) {

        console.log('error', error);

        throw createError({
            status: 500,
            message: 'Failed to create team',
        })
    }

})
