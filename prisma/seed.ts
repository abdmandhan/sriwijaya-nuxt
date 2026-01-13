
import 'dotenv/config'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'
import bcrypt from "bcryptjs"
import { faker } from '@faker-js/faker';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

const slugify = (name: string) => {
    return name
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')   // Remove all non-word characters except spaces and hyphens
        .replace(/[\s_-]+/g, '-')   // Replace spaces and underscores with hyphens
        .replace(/^-+|-+$/g, '');   // Remove leading and trailing hyphens
}

async function main() {
    // const hashedPassword = await bcrypt.hash('c0fb369ea89b4baf8a63b3f9962f5e28', 10)
    // const alice = await prisma.users.create({
    //     data: {
    //         email: 'admin@gmail.com',
    //         password: hashedPassword,
    //     },
    // })

    // faker newsletter

    const howManyNewsletter = 100;
    const countNewsletter = await prisma.newsletter.count()

    if (countNewsletter < howManyNewsletter) {
        for (let i = 0; i < howManyNewsletter; i++) {
            const title = faker.lorem.sentence();
            const slug = slugify(title);
            await prisma.newsletter.create({
                data: {
                    title: title,
                    content: faker.lorem.paragraph(),
                    slug,
                    image: faker.image.url(),
                    document: faker.system.filePath(),
                },
            })
        }
    }

    // console.log(`Created user: ${alice.email}`)
    console.log(`Created newsletters: ${countNewsletter}`)
}

main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })