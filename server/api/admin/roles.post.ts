import { z } from 'zod'

const bodySchema = z.object({
    name: z.string().min(1),
})

export default defineEventHandler(async (event) => {
    // Ensure user is authenticated
    await requireUserSession(event)

    const body = await readValidatedBody(event, bodySchema.parse)

    const role = await prisma.roles.create({
        data: {
            name: body.name,
        },
    })

    return role
})
