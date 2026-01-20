import { createRouter, defineEventHandler, useBase } from 'h3'

const router = createRouter()

router.get('/list', defineEventHandler(async (event) => {
    // Ensure user is authenticated
    await requireUserSession(event)

    const appConfigs = await prisma.mailboxes.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })

    return appConfigs
}))

router.put('/:id/read', defineEventHandler(async (event) => {
    // Ensure user is authenticated
    await requireUserSession(event)

    const id = parseInt(getRouterParam(event, 'id') || '0')

    if (!id) {
        throw createError({
            status: 400,
            message: 'Invalid mailbox ID',
        })
    }

    await prisma.mailboxes.update({
        where: { id },
        data: {
            is_read: true
        }
    })

    return { success: true }
}))


export default useBase('/api/admin/mailboxes', router.handler)