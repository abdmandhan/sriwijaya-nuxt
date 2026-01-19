import { createRouter, defineEventHandler, useBase } from 'h3'
import { z } from 'zod'

const router = createRouter()

const schema = z.object({
    key: z.string().min(1),
    type: z.enum(['file', 'text', 'number', 'boolean']),
    value: z.string().min(1)
})

router.get('/', defineEventHandler(async (event) => {
    // Ensure user is authenticated
    await requireUserSession(event)

    const appConfigs = await prisma.app_configs.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })

    return appConfigs
}))

router.post('/', defineEventHandler(async (event) => {
    // Ensure user is authenticated
    await requireUserSession(event)

    const body = await readValidatedBody(event, schema.parse)

    const existingAppConfig = await prisma.app_configs.findUnique({
        where: {
            key: body.key
        }
    })

    if (existingAppConfig) {
        await prisma.app_configs.update({
            where: { id: existingAppConfig.id },
            data: {
                value: body.value
            }
        })
    } else {
        await prisma.app_configs.create({
            data: {
                key: body.key,
                type: body.type,
                value: body.value
            }
        })
    }

    return { success: true }
}))


export default useBase('/api/admin/app-configs', router.handler)