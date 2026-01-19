// Upload image
export async function uploadImageFile(file: File | null, existingUrl: string, type: 'image' | 'document'): Promise<string> {
    if (!file) {
        return existingUrl // Return existing image if no new file
    }

    try {
        const formData = new FormData()
        formData.append('file', file, file.name)
        formData.append('type', type)

        const result = await $fetch('/api/admin/upload', {
            method: 'POST',
            body: formData,
        })

        return result.url
    } catch (error: any) {
        throw error
    }
}