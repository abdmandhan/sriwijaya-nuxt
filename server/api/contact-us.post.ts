import z from "zod"
import nodemailer from "nodemailer"

type SendEmailPayload = {
    to: string
    subject: string
    html: string
}

async function sendEmail({ to, subject, html }: SendEmailPayload) {
    const host = process.env.SMTP_HOST || "smtp.gmail.com"
    const port = Number(process.env.SMTP_PORT || 465)
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS

    if (!user || !pass) {
        console.warn("[contact-us] SMTP_USER / SMTP_PASS not set, skipping email send")
        return
    }

    const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465, // true for 465, false for other ports
        auth: { user, pass },
    })

    await transporter.sendMail({
        from: user,
        to,
        subject,
        html,
    })
}

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

    // todo: send email to admin
    await sendEmail({
        to: 'contact@ssco-law.id',
        subject: 'New contact us message',
        html: `
        <p>New contact us message from ${body.name} with email ${body.email} and question ${body.question}</p>
        `,
    })

    return { success: true }
})