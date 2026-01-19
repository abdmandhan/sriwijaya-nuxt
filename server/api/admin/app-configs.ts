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

    const appConfigs = await prisma.app_configs.create({
        data: {
            key: body.key,
            type: body.type,
            value: body.value
        }
    })

    return appConfigs
}))

router.put('/:id', defineEventHandler(async (event) => {
    // Ensure user is authenticated
    await requireUserSession(event)

    const id = parseInt(event.context.params?.id || '0')

    if (!id) {
        throw createError({
            status: 400,
            message: 'Invalid app config ID'
        })
    }

    const body = await readValidatedBody(event, schema.parse)

    const appConfigs = await prisma.app_configs.update({
        where: { id },
        data: {
            key: body.key,
            type: body.type,
            value: body.value
        }
    })

    return appConfigs
}))

router.delete('/:id', defineEventHandler(async (event) => {
    // Ensure user is authenticated
    await requireUserSession(event)

    const id = parseInt(event.context.params?.id || '0')

    if (!id) {
        throw createError({
            status: 400,
            message: 'Invalid app config ID'
        })
    }

    await prisma.app_configs.delete({
        where: { id }
    })

    return {
        message: 'App config deleted successfully'
    }
}))

export default useBase('/api/admin/app-configs', router.handler)