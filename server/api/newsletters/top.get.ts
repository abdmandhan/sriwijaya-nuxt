import { prisma } from '../../utils/db'

export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const rawLimit = Array.isArray(query.limit) ? query.limit[0] : query.limit
    const limit = Math.min(10, Math.max(1, Number(rawLimit) || 3))

    const newsletters = await prisma.newsletter.findMany({
        orderBy: {
            createdAt: 'desc',
        },
        take: limit,
    })

    return newsletters
})
