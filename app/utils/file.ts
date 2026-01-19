// Upload image
export async function uploadImageFile(file: File | null, existingUrl: string, type: 'image' | 'document'): Promise<string> {
    if (!file) {
        return existingUrl // Return existing image if no new file
    }

    try {
        // Convert file to base64
        const base64 = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader()
            reader.onload = () => {
                const result = reader.result as string
                resolve(result)
            }
            reader.onerror = reject
            reader.readAsDataURL(file)
        })

        const result = await $fetch('/api/admin/upload', {
            method: 'POST',
            body: {
                file: base64,
                type: type,
                filename: file.name,
                contentType: file.type,
            },
        })

        return result.url
    } catch (error: any) {
        throw error
    }
}