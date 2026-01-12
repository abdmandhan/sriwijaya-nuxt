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

    // Check if team exists
    const team = await prisma.teams.findUnique({
        where: { id },
    })

    if (!team) {
        throw createError({
            status: 404,
            message: 'Team not found',
        })
    }

    // Delete related educations and bar_admissions first (cascade delete)
    await Promise.all([
        prisma.team_educations.deleteMany({
            where: { team_id: id },
        }),
        prisma.team_bar_admissions.deleteMany({
            where: { team_id: id },
        }),
    ])

    // Delete team
    await prisma.teams.delete({
        where: { id },
    })

    return { success: true }
})
