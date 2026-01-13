import { prisma } from '../utils/db'

export default defineEventHandler(async (event) => {
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

    // Manually join roles with teams and format for frontend
    const rolesWithTeams = roles
        .map(role => ({
            title: role.name,
            members: teams
                .filter(team => team.role_id === role.id)
                .map(team => ({
                    name: team.name,
                    image: team.image,
                    image_card: team.image_card,
                    slug: team.slug,
                })),
        }))
        .filter(role => role.members.length > 0) // Only include roles that have teams

    return rolesWithTeams
})
