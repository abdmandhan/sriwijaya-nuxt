<template>
    <div class="bg-[#F8F9FD]">
        <!-- breadcrumb -->
        <div
            class="bg-secondary h-[38px] xl:h-[48px] text-xs px-4 py-3 text-gray-500 md:text-sm xl:text-base max-w-[1608px] mx-auto">
            Homepage / Newsletter List
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
        <div class="flex gap-2 md:gap-4 my-10 mx-4 md:p-10 max-w-[1608px] md:mx-auto">
            <div>
                <NuxtImg class="aspect-160/100 md:aspect-240/160 min-w-[160px] md:min-w-[240px] rounded-xl"
                    src="/img/newsletter-card-2.png" />
            </div>
            <div class="flex flex-col gap-2">
                <span class="uppercase border-b border-primary font-rajdhani text-xs md:text-sm w-fit">
                    Latest Newsletter
                </span>
                <span
                    class="font-bold text-sm md:text-md h-[17px] text-ellipsis truncate max-w-[186px] md:max-w-[500px] xl:max-w-[1022px]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                </span>
                <p
                    class="text-sm md:text-md max-w-[186px] md:max-w-[500px] xl:max-w-[1022px] xl:h-[56px] truncate text-ellipsis h-[34px]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                    type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                    the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                    1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                    desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <NuxtLink href="#" class="text-[10px] xl:text-2xl flex items-center text-primary gap-2 xl:gap-4">
                    Learn More
                    <UIcon name="i-lucide-arrow-right"
                        class="size-3 text-primary xl:size-6 border border-primary rounded-full p-px xl:p-1"
                        mode="svg" />
                </NuxtLink>
            </div>


        </div>

        <!-- newsletter list -->
        <div class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mx-4 md:p-10 pb-10 xl:max-w-[1608px] xl:mx-auto">
            <!-- newsletter card -->
            <div class="bg-white rounded-xl w-full" v-for="newsletter in newsletters" :key="newsletter.title">
                <NuxtImg src="/img/newsletter-card-1.png" class="w-full rounded-t-xl" />
                <div class="p-2 flex flex-col gap-2 xl:gap-4 xl:p-12">
                    <span class="font-bold text-[10px] xl:text-3xl">Asset performance Management Software</span>
                    <p class="text-gray-500 text-[8px] xl:text-2xl">
                        Distribution management systems for the morden grid.
                    </p>
                    <NuxtLink class="text-[8px] flex gap-2 items-center xl:text-2xl text-primary">
                        Learn More
                        <UIcon name="i-lucide-arrow-right"
                            class="size-3 xl:size-6 border border-secondary-100 rounded-full p-px xl:p-1" mode="svg" />

                    </NuxtLink>

                </div>
            </div>
        </div>

        <!-- pagination -->
        <div class="flex items-center justify-center pb-20 text-sm">
            <button
                class="bg-transparent border-[#E5E7EB] border px-3 py-2 rounded-l-xl cursor-pointer hover:bg-[#91795C] hover:text-white">Prev</button>
            <ol class="flex items-center">
                <li v-for="i in 4" :key="i"
                    class="active:bg-[#91795C] bg-white px-3 py-2 border border-[#E5E7EB] hover:bg-[#91795C] hover:text-white">
                    <button class="cursor-pointer">
                        {{ i }}
                    </button>
                </li>
            </ol>
            <button
                class="bg-transparent border-[#E5E7EB] border px-3 py-2 rounded-r-xl cursor-pointer hover:bg-[#91795C] hover:text-white">Next</button>
        </div>
    </div>
</template>

<script setup>
const newsletters = [
    { title: 'Asset performance Management Software' },
    { title: 'Advanced Distribution Management Solutions ' },
    { title: 'Advanced Distribution Management Solutions ' },
]
</script>