

export default defineEventHandler(async (event) => {
    const companyProfile = await prisma.app_configs.findUnique({
        where: {
            key: 'company_profile'
        }
    })

    return companyProfile
})