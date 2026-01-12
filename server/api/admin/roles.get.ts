export default defineEventHandler(async (event) => {
    // Ensure user is authenticated
    await requireUserSession(event)

    const roles = await prisma.roles.findMany({
        orderBy: {
            name: 'asc',
        },
    })

    const teams = await prisma.teams.findMany({
        orderBy: {
            name: 'asc',
        },
    })

    // Manually join roles with teams
    const rolesWithTeams = roles.map(role => ({
        ...role,
        teams: teams.filter(team => team.role_id === role.id),
    }))

    return rolesWithTeams
})
