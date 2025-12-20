
export default defineEventHandler(async (event) => {
    const users = await prisma.users.findMany()
    return users
})