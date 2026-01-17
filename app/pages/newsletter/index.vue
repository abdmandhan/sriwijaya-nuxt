<script setup lang="ts">
interface Newsletter {
    id: number
    title: string
    slug: string
    content: string
    image: string
    document: string | null
    createdAt: string
    updatedAt: string
}

interface NewsletterListResponse {
    items: Newsletter[]
    total: number
    page: number
    pageSize: number
    totalPages: number
}

const route = useRoute()
const router = useRouter()

const pageSize = 6
const page = ref(1)

function parsePage(value: unknown) {
    const rawValue = Array.isArray(value) ? value[0] : value
    const parsed = Number(rawValue)
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 1
}

watch(
    () => route.query.page,
    (value) => {
        page.value = parsePage(value)
    },
    { immediate: true }
)

const { data: newsletterResponse, pending } = await useFetch<NewsletterListResponse>('/api/newsletters', {
    query: computed(() => ({
        page: page.value,
        pageSize,
    })),
    watch: [page],
    server: false
})

const { data: latestResponse } = await useFetch<Newsletter[]>('/api/newsletters/top', {
    query: { limit: 1 },
    server: false
})

const newsletters = computed(() => newsletterResponse.value?.items ?? [])
const totalPages = computed(() => newsletterResponse.value?.totalPages ?? 1)
const latestNewsletter = computed(() => latestResponse.value?.[0] ?? null)

const pageNumbers = computed(() => Array.from({ length: totalPages.value }, (_, index) => index + 1))

const canPrev = computed(() => page.value > 1)
const canNext = computed(() => page.value < totalPages.value)

function goToPage(value: number) {
    const nextPage = Math.min(Math.max(1, value), totalPages.value)
    if (nextPage === page.value) return
    page.value = nextPage
}

watch(page, (value) => {
    const current = parsePage(route.query.page)
    if (value === current) return
    router.push({
        query: {
            ...route.query,
            page: String(value),
        },
    })
})

watch(totalPages, (value) => {
    if (page.value > value) {
        page.value = value
    }
})

function getImage(url: string, fallback: string) {
    return url || fallback
}
</script>

<template>
    <div class="bg-[#F8F9FD]">
        <!-- breadcrumb -->
        <div
            class="bg-secondary h-[38px] xl:h-[48px] text-xs px-4 py-3 text-gray-500 md:text-sm xl:text-base max-w-[1608px] mx-auto">
            <NuxtLink href="/" class="hover:text-primary hover:border-b hover:border-primary transition-all">
                Homepage
            </NuxtLink> / <span class="text-primary font-semibold">Newsletter List</span>
        </div>
        <div
            class="bg-[url(/bg/newsletter-mobile.png)] md:bg-[url(/bg/newsletter.png)] bg-cover bg-center bg-no-repeat h-[340px] md:h-[160px] xl:h-[240px]">
            <div
                class="max-w-[1608px] mx-auto text-white flex justify-center flex-col h-full gap-2 md:gap-4 px-4 md:px-6">
                <h1 class="text-2xl xl:text-5xl font-bold">Discover Our Latest Newsletter</h1>
                <h2 class="text-sm xl:text-xl md:max-w-[735px]">Discover the achievements that set us apart. from
                    groundbreaking project
                    to industry accolades, we
                    take pride in our accomplishments.</h2>
            </div>
        </div>
        <!-- Latest Newsletter -->
        <div v-if="latestNewsletter" class="flex gap-2 md:gap-10 my-10 mx-4 md:p-10 max-w-[1608px] md:mx-auto">
            <div>
                <!-- class="aspect-160/100 min-w-[160px] md:min-w-[240px] rounded-xl lg:aspect-480/320 md:aspect-180/120" -->
                <NuxtImg class="w-[160px] h-[100px] md:w-[180px] md:h-[120px] lg:w-[480px] lg:h-[320px] rounded-xl"
                    :src="getImage(latestNewsletter.image, '/img/newsletter-card-2.png')" />
            </div>
            <div class="flex flex-col gap-2 justify-between">
                <div class="flex flex-col gap-2">
                    <span
                        class="uppercase border-b border-primary font-rajdhani text-xs md:text-sm w-fit lg:text-3xl text-primary">
                        Latest Newsletter
                    </span>
                    <span
                        class="font-bold text-sm md:text-md h-[17px] lg:h-auto text-ellipsis max-w-[186px] md:max-w-[500px] xl:max-w-[1022px] lg:text-4xl line-clamp-2">
                        {{ latestNewsletter.title }}
                    </span>
                    <div class="text-sm md:text-md max-w-[186px] md:max-w-[500px] xl:max-w-[1022px] xl:h-[56px] md:text-clip h-[34px] lg:text-xl line-clamp-4"
                        v-html="latestNewsletter.content"></div>
                </div>
                <NuxtLink :to="`/newsletter/${latestNewsletter.slug}`"
                    class="text-[10px] xl:text-2xl flex items-center text-primary gap-2 xl:gap-4 font-semibold group">
                    Learn More

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="size-3 text-primary xl:size-10 border border-primary rounded-full p-px xl:p-1 transition-all duration-300 group-hover:translate-x-2">
                        <path d="M5 12H19" stroke="#75624C" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M15 8L19 12L15 16" stroke="#75624C" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </NuxtLink>
            </div>
        </div>

        <!-- newsletter list -->
        <div
            class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mx-4 md:p-10 pb-10 xl:max-w-[1608px] xl:mx-auto xl:gap-20">
            <div v-if="pending && newsletters.length === 0" class="col-span-2 md:col-span-3 text-center text-gray-500">
                Loading newsletters...
            </div>
            <div v-else-if="newsletters.length === 0" class="col-span-2 md:col-span-3 text-center text-gray-500">
                No newsletters available.
            </div>
            <div v-else class="bg-white rounded-xl w-full" v-for="newsletter in newsletters" :key="newsletter.id">
                <NuxtImg :src="getImage(newsletter.image, '/img/newsletter-card-1.png')"
                    class="w-full rounded-t-xl aspect-480/320" />
                <div class="p-2 flex flex-col gap-2 xl:gap-4 xl:p-12">
                    <span class="font-bold text-[10px] xl:text-3xl line-clamp-2">{{ newsletter.title }}</span>
                    <div class="text-gray-500 text-[8px] xl:text-2xl line-clamp-2" v-html="newsletter.content"></div>
                    <NuxtLink :to="`/newsletter/${newsletter.slug}`"
                        class="text-[8px] flex gap-2 items-center xl:text-2xl text-primary group font-semibold">
                        Learn More

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            class="size-3 text-primary xl:size-7 border border-primary rounded-full p-px xl:p-1 transition-all duration-300 group-hover:translate-x-2">
                            <path d="M5 12H19" stroke="#75624C" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M15 8L19 12L15 16" stroke="#75624C" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>

                    </NuxtLink>

                </div>
            </div>
        </div>

        <!-- pagination -->
        <div class="flex items-center justify-center pb-20 text-sm" v-if="totalPages > 1">
            <button
                class="bg-transparent border-[#E5E7EB] border px-3 py-2 rounded-l-xl hover:bg-[#91795C] hover:text-white"
                :class="{ 'opacity-90 cursor-not-allowed': !canPrev }" :disabled="!canPrev"
                @click="goToPage(page - 1)">Prev</button>
            <ol class="flex items-center">
                <li v-for="pageNumber in pageNumbers" :key="pageNumber" class="border border-[#E5E7EB]">
                    <button class="cursor-pointer px-3 py-2"
                        :class="pageNumber === page ? 'bg-[#91795C] text-white' : 'bg-white hover:bg-[#91795C] hover:text-white'"
                        @click="goToPage(pageNumber)">
                        {{ pageNumber }}
                    </button>
                </li>
            </ol>
            <button
                class="bg-transparent border-[#E5E7EB] border px-3 py-2 rounded-r-xl hover:bg-[#91795C] hover:text-white"
                :class="{ 'opacity-90 cursor-not-allowed': !canNext }" :disabled="!canNext"
                @click="goToPage(page + 1)">Next</button>
        </div>
    </div>
</template>
