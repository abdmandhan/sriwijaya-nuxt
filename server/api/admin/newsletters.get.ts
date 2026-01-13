export default defineEventHandler(async (event) => {
    // Ensure user is authenticated
    await requireUserSession(event)

    const newsletters = await prisma.newsletter.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    })

    return newsletters
})
