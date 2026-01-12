import { z } from 'zod'

const bodySchema = z.object({
    name: z.string().min(1),
})

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

    const body = await readValidatedBody(event, bodySchema.parse)

    const role = await prisma.roles.update({
        where: { id },
        data: {
            name: body.name,
        },
    })

    return role
})
