export default defineEventHandler(async (event) => {
    try {
        const health = await prisma.teams.findFirst({
            select: {
                id: true,
            },
        })

        if (!health) {
            throw createError({
                statusCode: 500,
                statusMessage: 'Database connection failed',
            })
        }

        return {
            status: 'ok',
        }
    } catch (error) {
        return createError({
            statusCode: 500,
            statusMessage: 'Internal server error',
        })
    }
})