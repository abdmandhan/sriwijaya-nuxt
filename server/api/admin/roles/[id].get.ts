export default defineEventHandler(async (event) => {
    // Ensure user is authenticated
    await requireUserSession(event)

    const id = parseInt(getRouterParam(event, 'id') || '0')

    if (!id) {
        throw createError({
            status: 400,
            message: 'Invalid role ID',
        })
    }

    const role = await prisma.roles.findUnique({
        where: { id },
    })

    if (!role) {
        throw createError({
            status: 404,
            message: 'Role not found',
        })
    }

    const teams = await prisma.teams.findMany({
        where: { role_id: id },
        orderBy: {
            name: 'asc',
        },
    })

    // Get educations and bar_admissions for each team
    const teamsWithDetails = await Promise.all(
        teams.map(async (team) => {
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
        })
    )

    return {
        ...role,
        teams: teamsWithDetails,
    }
})
