import { createClient } from '@supabase/supabase-js'
import { z } from 'zod'

const bodySchema = z.object({
    file: z.string(), // base64 encoded file
    filename: z.string(),
    type: z.enum(['image', 'document']),
    contentType: z.string().optional(),
})

export default defineEventHandler(async (event) => {
    // Ensure user is authenticated
    await requireUserSession(event)

    const body = await readValidatedBody(event, bodySchema.parse)

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

    // Convert base64 to buffer
    const base64Data = body.file.replace(/^data:image\/\w+;base64,/, '')
    const buffer = Buffer.from(base64Data, 'base64')

    // Generate unique filename
    const fileExt = body.filename.split('.').pop() || 'jpg'
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`
    const filePath = `teams/${fileName}`

    // Upload file to Supabase Storage
    const { error } = await supabase.storage
        .from(supabaseBucket)
        .upload(filePath, buffer, {
            contentType: body.contentType || `image/${fileExt}`,
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
