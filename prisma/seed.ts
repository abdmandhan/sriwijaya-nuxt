
import 'dotenv/config'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../lib/generated/prisma/client'
import bcrypt from "bcryptjs"

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

async function main() {
    const hashedPassword = await bcrypt.hash('12341234', 10)
    const alice = await prisma.users.create({
        data: {
            email: 'admin@gmail.com',
            password: hashedPassword,
        },
    })
    console.log(`Created user: ${alice.email}`)
}

main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })