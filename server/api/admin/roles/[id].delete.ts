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

    // Check if role has teams
    const teamsCount = await prisma.teams.count({
        where: { role_id: id },
    })

    if (teamsCount > 0) {
        throw createError({
            status: 400,
            message: `Cannot delete role with ${teamsCount} team(s). Please remove or reassign teams first.`,
        })
    }

    const role = await prisma.roles.delete({
        where: { id },
    })

    return { success: true, role }
})
