<template>
    <!-- <div v-if="newsletter" class="bg-[#F8F9FD] min-h-screen"> -->
    <div v-if="newsletter" class="bg-white min-h-screen">
        <!-- breadcrumb -->
        <div class="bg-[#F8F9FD]">
            <div
                class="h-[38px] xl:h-[48px] text-xs px-4 py-3 text-gray-500 md:text-sm xl:text-base max-w-[1608px] mx-auto">

                <NuxtLink href="/" class="hover:text-primary hover:border-b hover:border-primary transition-all">
                    Homepage
                </NuxtLink>/
                <NuxtLink href="/newsletter"
                    class="hover:text-primary hover:border-b hover:border-primary transition-all">
                    Newsletter List
                </NuxtLink>
                / <span class="text-primary font-semibold">{{ newsletter.title }}</span>
            </div>
        </div>

        <div class="max-w-[1608px] mx-auto px-4 py-8 xl:py-12">
            <!-- hero image -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-sm">
                <NuxtImg :src="newsletter.image || '/img/newsletter-card-1.png'"
                    class="w-full object-cover aspect-video" />
            </div>

            <!-- content -->
            <div class="mt-6 xl:mt-10 max-w-[980px]">
                <h1 class="text-2xl md:text-3xl xl:text-5xl font-bold text-secondary-110">
                    {{ newsletter.title }}
                </h1>

                <div class="mt-3 flex items-center gap-2 text-gray-500 text-xs md:text-sm xl:text-base">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8 7V3M16 7V3M4 11H20M6 5H18C19.1046 5 20 5.89543 20 7V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V7C4 5.89543 4.89543 5 6 5Z"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>{{ formattedDate }}</span>
                </div>

                <div class="mt-6 xl:mt-10 text-secondary-100 text-sm md:text-base xl:text-xl leading-relaxed editor"
                    v-html="newsletter.content" />

                <div class="mt-10 xl:mt-14 text-secondary-100 text-sm md:text-base xl:text-xl">
                    <p class="mb-4">For further information, please contact :</p>
                    <p class="font-semibold">Shinta Sriwijaya</p>
                    <p>Founding Partner</p>
                    <a href="mailto:shinta.sriwijaya@sscolaw.com" class="inline-block mt-2 text-primary underline">
                        shinta.sriwijaya@sscolaw.com
                    </a>
                </div>

                <div class="mt-6" v-if="newsletter.document">
                    <a :href="newsletter.document" target="_blank" rel="noopener"
                        class="inline-flex items-center gap-2 border border-primary text-primary rounded-md px-4 py-2 text-xs md:text-sm xl:text-base hover:bg-primary hover:text-white transition-colors">
                        Download Document
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 3V15" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M5 21H19" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { format } from 'date-fns'

interface Newsletter {
    id: number
    title: string
    slug: string
    content: string
    image: string
    document: string | null
    createdAt: string | Date
    updatedAt: string | Date
}

const route = useRoute()
const slug = String(route.params.slug)

const newsletter = await $fetch<Newsletter>(`/api/newsletters/${encodeURIComponent(slug)}`).catch(() => {
    throw createError({
        statusCode: 404,
        message: 'Newsletter not found',
    })
})

const formattedDate = computed(() => {
    const value = newsletter?.createdAt
    if (!value) return ''
    const date = value instanceof Date ? value : new Date(value)
    if (Number.isNaN(date.getTime())) return ''
    return format(date, 'dd MMM yyyy').toUpperCase()
})
</script>
