
import 'dotenv/config'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'
import bcrypt from "bcryptjs"

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

async function main() {
    const hashedPassword = await bcrypt.hash('c0fb369ea89b4baf8a63b3f9962f5e28', 10)
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