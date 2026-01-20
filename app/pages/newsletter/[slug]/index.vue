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
                <NuxtImg :src="newsletter.image || '/img/newsletter-card-1.png'" class="w-full object-cover" />
            </div>

            <!-- content -->
            <div class="mt-6 xl:mt-10">
                <h1 class="text-2xl md:text-3xl xl:text-5xl font-bold text-black">
                    {{ newsletter.title }}
                </h1>

                <div class="mt-3 flex items-center gap-2 text-gray-500 text-xs md:text-sm xl:text-base">

                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M4.5 0C4.69891 0 4.88968 0.0790175 5.03033 0.21967C5.17098 0.360322 5.25 0.551088 5.25 0.75V2.25H14.25V0.75C14.25 0.551088 14.329 0.360322 14.4697 0.21967C14.6103 0.0790175 14.8011 0 15 0C15.1989 0 15.3897 0.0790175 15.5303 0.21967C15.671 0.360322 15.75 0.551088 15.75 0.75V2.25H16.5C17.2956 2.25 18.0587 2.56607 18.6213 3.12868C19.1839 3.69129 19.5 4.45435 19.5 5.25V16.5C19.5 17.2956 19.1839 18.0587 18.6213 18.6213C18.0587 19.1839 17.2956 19.5 16.5 19.5H3C2.20435 19.5 1.44129 19.1839 0.87868 18.6213C0.316071 18.0587 0 17.2956 0 16.5V5.25C0 4.45435 0.316071 3.69129 0.87868 3.12868C1.44129 2.56607 2.20435 2.25 3 2.25H3.75V0.75C3.75 0.551088 3.82902 0.360322 3.96967 0.21967C4.11032 0.0790175 4.30109 0 4.5 0ZM18 9C18 8.60218 17.842 8.22064 17.5607 7.93934C17.2794 7.65804 16.8978 7.5 16.5 7.5H3C2.60218 7.5 2.22064 7.65804 1.93934 7.93934C1.65804 8.22064 1.5 8.60218 1.5 9V16.5C1.5 16.8978 1.65804 17.2794 1.93934 17.5607C2.22064 17.842 2.60218 18 3 18H16.5C16.8978 18 17.2794 17.842 17.5607 17.5607C17.842 17.2794 18 16.8978 18 16.5V9Z"
                            fill="#4B5563" />
                    </svg>

                    <span>{{ formattedDate }}</span>
                </div>

                <div class="mt-6 xl:mt-10 text-secondary-100 text-sm md:text-base xl:text-xl leading-relaxed editor text-justify"
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
