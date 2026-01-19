<script setup lang="ts">
definePageMeta({
    middleware: ['authenticated'],
    layout: 'admin'
})

const toast = useToast()

interface Newsletter {
    id: number
    title: string
    content: string
    image: string
    document: string | null
    createdAt: string
    updatedAt: string
}

const newsletters = ref<Newsletter[]>([])
const loading = ref(false)
const selectedNewsletter = ref<Newsletter | null>(null)
const isNewsletterModalOpen = ref(false)
const isCreateNewsletterModalOpen = ref(false)
const isDeleteNewsletterConfirmOpen = ref(false)

const isNewsletterFormModalOpen = computed({
    get: () => isCreateNewsletterModalOpen.value || isNewsletterModalOpen.value,
    set: () => {
        isCreateNewsletterModalOpen.value = false
        isNewsletterModalOpen.value = false
    }
})

const isEditMode = computed(() => isNewsletterModalOpen.value && !isCreateNewsletterModalOpen.value)
const newsletterModalTitle = computed(() => isEditMode.value ? 'Edit Newsletter' : 'Create Newsletter')
const newsletterModalSubmitLabel = computed(() => isEditMode.value ? 'Save' : 'Create')

const newsletterForm = ref({
    title: '',
    content: '',
    image: '',
    document: '',
})

const imageFile = ref<File | null>(null)
const imagePreview = ref<string | null>(null)

function closeNewsletterModal() {
    isCreateNewsletterModalOpen.value = false
    isNewsletterModalOpen.value = false
}

function submitNewsletterForm() {
    if (isEditMode.value) {
        saveNewsletter()
    } else {
        createNewsletter()
    }
}

function formatDate(value: string) {
    if (!value) return ''
    return new Date(value).toLocaleDateString()
}

async function fetchNewsletters() {
    loading.value = true
    try {
        const req = await $fetch('/api/admin/newsletters', { method: 'GET' })
        newsletters.value = req
    } catch (error: any) {
        toast.add({
            title: 'Error',
            description: error.data?.message || 'Failed to fetch newsletters',
            color: 'error',
        })
    } finally {
        loading.value = false
    }
}

function openCreateNewsletter() {
    selectedNewsletter.value = null
    newsletterForm.value = {
        title: '',
        content: '',
        image: '',
        document: '',
    }
    imageFile.value = null
    imagePreview.value = null
    isCreateNewsletterModalOpen.value = true
}

function openEditNewsletter(newsletter: Newsletter) {
    selectedNewsletter.value = newsletter
    newsletterForm.value = {
        title: newsletter.title,
        content: newsletter.content,
        image: newsletter.image,
        document: newsletter.document || '',
    }
    imagePreview.value = newsletter.image
    imageFile.value = null
    isNewsletterModalOpen.value = true
}

function openDeleteNewsletter(newsletter: Newsletter) {
    selectedNewsletter.value = newsletter
    isDeleteNewsletterConfirmOpen.value = true
}

function handleImageSelect(event: Event) {
    const target = event.target as HTMLInputElement
    if (target.files && target.files[0]) {
        imageFile.value = target.files[0]
        const reader = new FileReader()
        reader.onload = (e) => {
            imagePreview.value = e.target?.result as string
        }
        reader.readAsDataURL(imageFile.value)
    }
}

async function uploadImageFile(file: File | null, existingUrl: string): Promise<string> {
    if (!file) {
        return existingUrl
    }

    try {
        const formData = new FormData()
        formData.append('file', file, file.name)
        formData.append('type', 'image')

        const result = await $fetch('/api/admin/upload', {
            method: 'POST',
            body: formData,
        })

        return result.url
    } catch (error: any) {
        toast.add({
            title: 'Error',
            description: error.data?.message || 'Failed to upload image',
            color: 'error',
        })
        throw error
    }
}

async function createNewsletter() {
    try {
        if (imageFile.value) {
            try {
                newsletterForm.value.image = await uploadImageFile(imageFile.value, newsletterForm.value.image)
            } catch (uploadError) {
                console.error('Image upload failed:', uploadError)
            }
        }

        const newNewsletter = await $fetch('/api/admin/newsletters', {
            method: 'POST',
            body: newsletterForm.value,
        })

        newsletters.value.unshift(newNewsletter)

        toast.add({
            title: 'Success',
            description: 'Newsletter created successfully',
            color: 'success',
        })

        isCreateNewsletterModalOpen.value = false
        imageFile.value = null
        imagePreview.value = null
    } catch (error: any) {
        toast.add({
            title: 'Error',
            description: error.data?.message || 'Failed to create newsletter',
            color: 'error',
        })
    }
}

async function saveNewsletter() {
    if (!selectedNewsletter.value) return

    try {
        if (imageFile.value) {
            try {
                newsletterForm.value.image = await uploadImageFile(imageFile.value, newsletterForm.value.image)
            } catch (uploadError) {
                console.error('Image upload failed, using existing image:', uploadError)
            }
        }

        const updatedNewsletter = await $fetch(`/api/admin/newsletters/${selectedNewsletter.value.id}`, {
            method: 'PUT',
            body: newsletterForm.value,
        })

        const index = newsletters.value.findIndex(item => item.id === selectedNewsletter.value!.id)
        if (index !== -1) {
            newsletters.value[index] = updatedNewsletter
        }

        toast.add({
            title: 'Success',
            description: 'Newsletter updated successfully',
            color: 'success',
        })

        isNewsletterModalOpen.value = false
        imageFile.value = null
        imagePreview.value = null
    } catch (error: any) {
        toast.add({
            title: 'Error',
            description: error.data?.message || 'Failed to update newsletter',
            color: 'error',
        })
    }
}

async function deleteNewsletter() {
    if (!selectedNewsletter.value) return

    try {
        await $fetch(`/api/admin/newsletters/${selectedNewsletter.value.id}`, {
            method: 'DELETE',
        })

        newsletters.value = newsletters.value.filter(item => item.id !== selectedNewsletter.value!.id)

        toast.add({
            title: 'Success',
            description: 'Newsletter deleted successfully',
            color: 'success',
        })

        isDeleteNewsletterConfirmOpen.value = false
        selectedNewsletter.value = null
    } catch (error: any) {
        toast.add({
            title: 'Error',
            description: error.data?.message || 'Failed to delete newsletter',
            color: 'error',
        })
    }
}

onMounted(() => {
    fetchNewsletters()
})
</script>

<template>
    <div class="space-y-6">
        <UCard>
            <template #header>
                <div class="flex items-center justify-between">
                    <h3 class="text-base font-semibold leading-6">Newsletter</h3>
                    <UButton v-if="loading" icon="i-lucide-loader-2" loading />
                    <UButton icon="i-lucide-plus" size="sm" @click="openCreateNewsletter">
                        Create Newsletter
                    </UButton>
                </div>
            </template>

            <div v-if="loading && newsletters.length === 0" class="flex justify-center py-8">
                <UIcon name="i-lucide-loader-2" class="size-8 animate-spin" />
            </div>

            <div v-else class="space-y-4">
                <div v-if="newsletters.length === 0" class="p-4 text-sm text-gray-500">
                    No newsletters yet
                </div>
                <div v-else class="divide-y">
                    <div v-for="newsletter in newsletters" :key="newsletter.id"
                        class="p-4 hover:bg-white transition-colors rounded-lg">
                        <div class="flex items-start justify-between gap-4">
                            <div class="flex items-start gap-4 flex-1">
                                <NuxtImg v-if="newsletter.image" :src="newsletter.image" :alt="newsletter.title"
                                    class="size-16 object-cover rounded-lg" />
                                <div class="flex-1 min-w-0">
                                    <h4 class="font-semibold">{{ newsletter.title }}</h4>
                                    <p class="text-sm text-gray-500">Updated {{ formatDate(newsletter.updatedAt) }}</p>
                                    <p v-if="newsletter.content" class="text-sm text-gray-600 mt-2 line-clamp-2"
                                        v-html="newsletter.content"></p>
                                    <div v-if="newsletter.document" class="mt-2">
                                        <a :href="newsletter.document" target="_blank"
                                            class="text-blue-600 hover:underline">
                                            View document
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center gap-2">
                                <UButton icon="i-lucide-edit" variant="ghost" size="sm"
                                    @click="openEditNewsletter(newsletter)">
                                    Edit
                                </UButton>
                                <UButton icon="i-lucide-trash-2" color="error" variant="ghost" size="sm"
                                    @click="openDeleteNewsletter(newsletter)">
                                    Delete
                                </UButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UCard>

        <UModal v-model:open="isNewsletterFormModalOpen" :title="newsletterModalTitle" :dismissible="false"
            class="lg:min-w-[800px]">
            <template #body>
                <div class="space-y-4 max-h-[70vh] overflow-y-auto">
                    <div class="space-y-4">
                        <UFormField label="Title" required>
                            <UInput v-model="newsletterForm.title" placeholder="Enter title" />
                        </UFormField>

                        <UFormField label="Image" required>
                            <div class="space-y-2">
                                <div v-if="imagePreview" class="relative">
                                    <NuxtImg :src="imagePreview" alt="Preview"
                                        class="size-32 object-cover rounded-lg" />
                                </div>
                                <UInput type="file" accept="image/*" @change="handleImageSelect" />
                            </div>
                        </UFormField>

                        <UFormField label="Document URL">
                            <UInput v-model="newsletterForm.document" placeholder="Enter document URL (optional)" />
                        </UFormField>

                        <UFormField label="Content" required>
                            <Editor v-model="newsletterForm.content" />
                        </UFormField>
                    </div>
                </div>
            </template>
            <template #footer>
                <div class="flex justify-end gap-2">
                    <UButton color="neutral" variant="ghost" @click="closeNewsletterModal">
                        Cancel
                    </UButton>
                    <UButton @click="submitNewsletterForm">
                        {{ newsletterModalSubmitLabel }}
                    </UButton>
                </div>
            </template>
        </UModal>

        <UModal v-model:open="isDeleteNewsletterConfirmOpen" title="Delete Newsletter" :dismissible="false">
            <template #body>
                <div class="space-y-4">
                    <p>Are you sure you want to delete the newsletter "{{ selectedNewsletter?.title }}"?</p>
                    <p class="text-sm text-gray-500">This action cannot be undone.</p>
                </div>
            </template>
            <template #footer>
                <div class="flex justify-end gap-2">
                    <UButton color="neutral" variant="ghost" @click="isDeleteNewsletterConfirmOpen = false">
                        Cancel
                    </UButton>
                    <UButton color="error" @click="deleteNewsletter">
                        Delete
                    </UButton>
                </div>
            </template>
        </UModal>
    </div>
</template>
