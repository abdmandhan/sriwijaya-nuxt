import { z } from 'zod'
import bcrypt from "bcryptjs"

const bodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})

export default defineEventHandler(async (event) => {
    const { email, password } = await readValidatedBody(event, bodySchema.parse)
    console.log('email', email);
    const user = await prisma.users.findUnique({
        where: {
            email: email,
        },
    })
    if (!user) {
        throw createError({
            status: 401,
            message: 'User not found',
        })
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
        throw createError({
            status: 401,
            message: 'Invalid password',
        })
    }

    const userSession = await setUserSession(event, {
        user: {
            name: user.email,
        },
    }, {
        maxAge: 60 * 60 * 24 * 30,
        cookie: {
            sameSite: 'lax',
            secure: false,
            httpOnly: true,
        }
    })

    return {
        user: userSession,
    }
})
