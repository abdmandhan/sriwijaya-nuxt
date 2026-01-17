import { prisma } from '../../utils/db'

export default defineEventHandler(async (event) => {
    const slug = getRouterParam(event, 'slug')

    if (!slug) {
        throw createError({
            status: 400,
            message: 'Newsletter slug is required',
        })
    }

    const isNumericId = /^\d+$/.test(slug)
    const newsletter = isNumericId
        ? await prisma.newsletter.findUnique({ where: { id: Number.parseInt(slug, 10) } })
        : await prisma.newsletter.findUnique({ where: { slug } })

    if (!newsletter) {
        throw createError({
            status: 404,
            message: 'Newsletter not found',
        })
    }

    return newsletter
})

