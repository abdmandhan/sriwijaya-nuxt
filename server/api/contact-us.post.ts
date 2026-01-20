import z from "zod"


const schema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    question: z.string().min(1),
})

export default defineEventHandler(async (event) => {
    const body = await readValidatedBody(event, schema.parse)

    await prisma.mailboxes.create({
        data: {
            name: body.name,
            email: body.email,
            question: body.question,
        },
    })

    return { success: true }
})