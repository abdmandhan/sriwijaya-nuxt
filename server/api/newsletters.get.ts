import { prisma } from '../utils/db'

export default defineEventHandler(async (event) => {
    const query = getQuery(event)

    const rawPage = Array.isArray(query.page) ? query.page[0] : query.page
    const rawPageSize = Array.isArray(query.pageSize) ? query.pageSize[0] : query.pageSize

    const page = Math.max(1, Number(rawPage) || 1)
    const pageSize = Math.min(12, Math.max(1, Number(rawPageSize) || 6))
    const skip = (page - 1) * pageSize

    const [items, total] = await Promise.all([
        prisma.newsletter.findMany({
            orderBy: {
                createdAt: 'desc',
            },
            skip,
            take: pageSize,
        }),
        prisma.newsletter.count(),
    ])

    const totalPages = Math.max(1, Math.ceil(total / pageSize))

    return {
        items,
        total,
        page,
        pageSize,
        totalPages,
    }
})
