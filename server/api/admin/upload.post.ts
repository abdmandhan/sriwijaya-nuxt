import { createClient } from '@supabase/supabase-js'
import { z } from 'zod'

const fieldsSchema = z.object({
    // Optional for backwards compatibility (older clients might not send it)
    type: z.enum(['image', 'document']).optional().default('image'),
})

export default defineEventHandler(async (event) => {
    // Ensure user is authenticated
    await requireUserSession(event)

    const formData = await readMultipartFormData(event)
    if (!formData) {
        throw createError({
            status: 400,
            message: 'Expected multipart/form-data',
        })
    }

    const filePart = formData.find((p) => p.name === 'file')
    if (!filePart || !filePart.data) {
        throw createError({
            status: 400,
            message: 'Missing file field',
        })
    }

    const typePart = formData.find((p) => p.name === 'type')
    const fields = fieldsSchema.parse({
        type: typePart?.data ? typePart.data.toString('utf-8') : undefined,
    })

    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_KEY
    const supabaseBucket = process.env.SUPABASE_BUCKET || 'uploads'

    if (!supabaseUrl || !supabaseKey) {
        throw createError({
            status: 500,
            message: 'Supabase configuration missing',
        })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    const originalFilename = filePart.filename || 'upload'
    const originalContentType = filePart.type || 'application/octet-stream'

    // Generate unique filename
    const extFromName = originalFilename.includes('.') ? originalFilename.split('.').pop() : undefined
    const extFromType = originalContentType.includes('/') ? originalContentType.split('/').pop() : undefined
    const fileExtRaw = (extFromName || extFromType || 'bin').toLowerCase()
    const fileExt = fileExtRaw.replace(/[^a-z0-9]+/g, '').slice(0, 12) || 'bin'
    const fileName = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}.${fileExt}`
    const filePath = `teams/${fields.type}/${fileName}`

    // Upload file to Supabase Storage
    const { error } = await supabase.storage
        .from(supabaseBucket)
        .upload(filePath, filePart.data, {
            contentType: originalContentType,
            upsert: false,
        })

    if (error) {
        throw createError({
            status: 500,
            message: `Upload failed: ${error.message}`,
        })
    }

    // Get public URL
    const { data: urlData } = supabase.storage
        .from(supabaseBucket)
        .getPublicUrl(filePath)

    return {
        url: urlData.publicUrl,
        path: filePath,
    }
})
