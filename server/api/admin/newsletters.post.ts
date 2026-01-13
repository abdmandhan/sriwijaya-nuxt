import { z } from 'zod'

const bodySchema = z.object({
    title: z.string().min(1),
    content: z.string().min(1),
    image: z.string().optional(),
    document: z.string().optional().nullable(),
})

export default defineEventHandler(async (event) => {
    // Ensure user is authenticated
    await requireUserSession(event)

    const body = await readValidatedBody(event, bodySchema.parse)

    const newsletter = await prisma.newsletter.create({
        data: {
            title: body.title,
            content: body.content,
            image: body.image || '',
            document: body.document?.trim() ? body.document : null,
        },
    })

    return newsletter
})
