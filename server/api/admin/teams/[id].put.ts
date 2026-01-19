import { z } from 'zod'
import { slugify } from '~~/server/utils/string'

const bodySchema = z.object({
    name: z.string().min(1),
    image: z.string().optional(),
    image_card: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    linkedin: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    role_id: z.number().int().positive(),
    educations: z.array(z.string()).optional(),
    bar_admissions: z.array(z.string()).optional(),
})

export default defineEventHandler(async (event) => {
    // Ensure user is authenticated
    await requireUserSession(event)

    const id = parseInt(getRouterParam(event, 'id') || '0')

    if (!id) {
        throw createError({
            status: 400,
            message: 'Invalid team ID',
        })
    }

    const body = await readValidatedBody(event, bodySchema.parse)

    // Update team
    const team = await prisma.teams.update({
        where: { id },
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

    // Update educations - delete existing and create new ones
    if (body.educations !== undefined) {
        await prisma.team_educations.deleteMany({
            where: { team_id: id },
        })

        if (body.educations.length > 0) {
            await prisma.team_educations.createMany({
                data: body.educations.map((education) => ({
                    team_id: id,
                    education,
                })),
            })
        }
    }

    // Update bar_admissions - delete existing and create new ones
    if (body.bar_admissions !== undefined) {
        await prisma.team_bar_admissions.deleteMany({
            where: { team_id: id },
        })

        if (body.bar_admissions.length > 0) {
            await prisma.team_bar_admissions.createMany({
                data: body.bar_admissions.map((bar_admission) => ({
                    team_id: id,
                    bar_admission,
                })),
            })
        }
    }

    // Fetch updated team with related data
    const [educations, barAdmissions] = await Promise.all([
        prisma.team_educations.findMany({
            where: { team_id: id },
            orderBy: { education: 'asc' },
        }),
        prisma.team_bar_admissions.findMany({
            where: { team_id: id },
            orderBy: { bar_admission: 'asc' },
        }),
    ])

    return {
        ...team,
        educations,
        bar_admissions: barAdmissions,
    }
})
