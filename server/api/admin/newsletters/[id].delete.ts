export default defineEventHandler(async (event) => {
    // Ensure user is authenticated
    await requireUserSession(event)

    const id = parseInt(getRouterParam(event, 'id') || '0')

    if (!id) {
        throw createError({
            status: 400,
            message: 'Invalid newsletter ID',
        })
    }

    const newsletter = await prisma.newsletter.findUnique({
        where: { id },
    })

    if (!newsletter) {
        throw createError({
            status: 404,
            message: 'Newsletter not found',
        })
    }

    await prisma.newsletter.delete({
        where: { id },
    })

    return { success: true }
})
