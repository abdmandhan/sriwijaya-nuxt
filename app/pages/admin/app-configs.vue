<script setup lang="ts">
import type { app_configs } from '@prisma/client'

definePageMeta({
    layout: 'admin',
    middleware: ['authenticated'],
})

const openCreateAppConfig = () => {
    console.log('openCreateAppConfig', companyProfile)
    document.getElementById('company-profile-file')?.click()
}

const toast = useToast();

const companyProfile = useState<string>('companyProfile', () => '')

const handleCompanyProfileChange = async (event: Event) => {
    const target = event.target as HTMLInputElement
    if (target.files && target.files[0]) {
        companyProfile.value = await uploadImageFile(target.files[0], companyProfile.value, 'document')
    }

    await $fetch('/api/admin/app-configs', {
        method: 'POST',
        body: {
            key: 'company_profile',
            type: 'file',
            value: companyProfile.value,
        },
    })
    await refresh();
    toast.add({
        title: 'Success',
        description: 'Company profile uploaded successfully',
        color: 'success',
    })
}

const { data, refresh } = await useFetch<app_configs[]>('/api/admin/app-configs', {
    method: 'GET',
})

const companyProfileUrl = computed(() => {
    return data.value?.find((config: app_configs) => config.key === 'company_profile')?.value
})
</script>

<template>
    <u-card>
        <template #header>
            <h3 class="text-base font-semibold leading-6">App Configs</h3>
        </template>
        <div class="space-y-4">
            <div class="flex items-center justify-between">
                <div class="flex flex-col gap-2">
                    <h3 class="text-base font-semibold leading-6">Company Profile</h3>
                    <nuxt-link :href="companyProfileUrl" v-if="companyProfileUrl"
                        class="w-fit text-blue-400 underline cursor-pointer" target="_blank">
                        {{ companyProfileUrl }}
                    </nuxt-link>
                </div>
                <UInput type="file" class="hidden" id="company-profile-file" @change="handleCompanyProfileChange" />
                <UButton icon="i-lucide-plus" size="sm" @click="openCreateAppConfig" class="w-60">
                    Upload Company Profile
                </UButton>
            </div>
        </div>

    </u-card>

</template>