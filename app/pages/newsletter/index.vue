<script setup lang="ts">
interface Newsletter {
    id: number
    title: string
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
})

const { data: latestResponse } = await useFetch<Newsletter[]>('/api/newsletters/top', {
    query: { limit: 1 },
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
            <NuxtLink href="/" class="hover:text-blue-400 hover:border-b hover:border-blue-400 transition-all">
                Homepage
            </NuxtLink> / Newsletter List
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
        <div v-if="latestNewsletter" class="flex gap-2 md:gap-4 my-10 mx-4 md:p-10 max-w-[1608px] md:mx-auto">
            <div>
                <NuxtImg class="aspect-160/100 md:aspect-240/160 min-w-[160px] md:min-w-[240px] rounded-xl"
                    :src="getImage(latestNewsletter.image, '/img/newsletter-card-2.png')" />
            </div>
            <div class="flex flex-col gap-2">
                <span class="uppercase border-b border-primary font-rajdhani text-xs md:text-sm w-fit">
                    Latest Newsletter
                </span>
                <span
                    class="font-bold text-sm md:text-md h-[17px] text-ellipsis truncate max-w-[186px] md:max-w-[500px] xl:max-w-[1022px]">
                    {{ latestNewsletter.title }}
                </span>
                <div
                    class="text-sm md:text-md max-w-[186px] md:max-w-[500px] xl:max-w-[1022px] xl:h-[56px] truncate text-ellipsis h-[34px]"
                    v-html="latestNewsletter.content"></div>
                <NuxtLink :to="`/newsletter/${latestNewsletter.id}`"
                    class="text-[10px] xl:text-2xl flex items-center text-primary gap-2 xl:gap-4">
                    Learn More
                    <UIcon name="i-lucide-arrow-right"
                        class="size-3 text-primary xl:size-6 border border-primary rounded-full p-px xl:p-1"
                        mode="svg" />
                </NuxtLink>
            </div>
        </div>

        <!-- newsletter list -->
        <div class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mx-4 md:p-10 pb-10 xl:max-w-[1608px] xl:mx-auto">
            <div v-if="pending && newsletters.length === 0" class="col-span-2 md:col-span-3 text-center text-gray-500">
                Loading newsletters...
            </div>
            <div v-else-if="newsletters.length === 0" class="col-span-2 md:col-span-3 text-center text-gray-500">
                No newsletters available.
            </div>
            <div v-else class="bg-white rounded-xl w-full" v-for="newsletter in newsletters" :key="newsletter.id">
                <NuxtImg :src="getImage(newsletter.image, '/img/newsletter-card-1.png')" class="w-full rounded-t-xl" />
                <div class="p-2 flex flex-col gap-2 xl:gap-4 xl:p-12">
                    <span class="font-bold text-[10px] xl:text-3xl">{{ newsletter.title }}</span>
                    <div class="text-gray-500 text-[8px] xl:text-2xl" v-html="newsletter.content"></div>
                    <NuxtLink :to="`/newsletter/${newsletter.id}`"
                        class="text-[8px] flex gap-2 items-center xl:text-2xl text-primary">
                        Learn More
                        <UIcon name="i-lucide-arrow-right"
                            class="size-3 xl:size-6 border border-secondary-100 rounded-full p-px xl:p-1" mode="svg" />

                    </NuxtLink>

                </div>
            </div>
        </div>

        <!-- pagination -->
        <div class="flex items-center justify-center pb-20 text-sm" v-if="totalPages > 1">
            <button
                class="bg-transparent border-[#E5E7EB] border px-3 py-2 rounded-l-xl hover:bg-[#91795C] hover:text-white"
                :class="{ 'opacity-50 cursor-not-allowed hover:bg-transparent hover:text-inherit': !canPrev }"
                :disabled="!canPrev" @click="goToPage(page - 1)">Prev</button>
            <ol class="flex items-center">
                <li v-for="pageNumber in pageNumbers" :key="pageNumber"
                    class="border border-[#E5E7EB]">
                    <button class="cursor-pointer px-3 py-2"
                        :class="pageNumber === page ? 'bg-[#91795C] text-white' : 'bg-white hover:bg-[#91795C] hover:text-white'"
                        @click="goToPage(pageNumber)">
                        {{ pageNumber }}
                    </button>
                </li>
            </ol>
            <button
                class="bg-transparent border-[#E5E7EB] border px-3 py-2 rounded-r-xl hover:bg-[#91795C] hover:text-white"
                :class="{ 'opacity-50 cursor-not-allowed hover:bg-transparent hover:text-inherit': !canNext }"
                :disabled="!canNext" @click="goToPage(page + 1)">Next</button>
        </div>
    </div>
</template>
