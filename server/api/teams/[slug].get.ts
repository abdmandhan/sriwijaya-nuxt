import { prisma } from '../../utils/db'

export default defineEventHandler(async (event) => {
    const slug = getRouterParam(event, 'slug')

    if (!slug) {
        throw createError({
            status: 400,
            message: 'Slug is required',
        })
    }

    const team = await prisma.teams.findUnique({
        where: { slug },
    })

    if (!team) {
        throw createError({
            status: 404,
            message: 'Team not found',
        })
    }

    // Get educations and bar_admissions
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

    // Fetch role name separately since teams table has role_id but no relation defined
    const role = await prisma.roles.findUnique({
        where: { id: team.role_id },
    })

    return {
        id: team.id,
        slug: team.slug,
        name: team.name,
        image: team.image,
        image_card: team.image_card,
        email: team.email,
        linkedin: team.linkedin,
        description: team.description,
        role: role?.name || '',
        educations: educations.map(e => e.education),
        bar_admissions: barAdmissions.map(b => b.bar_admission),
    }
})
