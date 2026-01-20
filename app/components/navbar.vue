<template>
    <nav
        class="flex md:justify-around gap-5 px-5 py-4 items-center fixed top-0 left-0 w-full shadow-lg z-50 h-16 xl:h-24 bg-white">
        <div class="max-w-[1808px] mx-auto w-full flex items-center md:justify-between lg:justify-center relative">
            <button @click="toggleSidebar" class="md:hidden mr-4" aria-label="Toggle menu">
                <UIcon name="i-lucide-menu" class="size-6 block" mode="svg" />
            </button>
            <NuxtLink href="/" class="lg:absolute left-10">
                <NuxtImg src="/logo.png" alt="logo" class="w-[200px] md:w-[160px] lg:w-[200px] xl:w-[300px]" />
            </NuxtLink>
            <ul class="gap-8 hidden md:flex text-sm xl:text-lg">
                <motion.li v-for="item in menu" :key="item.to" class="hover:text-primary transition-colors">
                    <NuxtLink :to="item.to"
                        class="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-primary after:rounded-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100">
                        {{ item.label }}
                    </NuxtLink>
                </motion.li>
            </ul>
        </div>
    </nav>

    <!-- Mobile Sidebar Overlay -->
    <Transition name="fade">
        <div v-if="isSidebarOpen" class="fixed inset-0 bg-black/50 z-40 md:hidden" @click="closeSidebar"></div>
    </Transition>

    <!-- Mobile Sidebar -->
    <Transition name="slide">
        <aside v-if="isSidebarOpen"
            class="fixed top-0 left-0 h-full w-full bg-white shadow-xl z-50 md:hidden overflow-y-auto">
            <div class="flex items-center justify-between p-5 border-b">
                <NuxtImg src="/logo.png" alt="logo" class="w-[140px]" />
                <button @click="closeSidebar" class="p-2" aria-label="Close menu">
                    <UIcon name="i-lucide-x" class="size-6" mode="svg" />
                </button>
            </div>
            <ul class="flex flex-col p-5 gap-4">
                <li v-for="item in menu" :key="item.to">
                    <NuxtLink :to="item.to" class="block py-2 text-lg hover:text-primary transition-colors"
                        @click="closeSidebar">
                        {{ item.label }}
                    </NuxtLink>
                </li>
            </ul>
        </aside>
    </Transition>
</template>

<script lang="ts" setup>
import { motion } from "motion-v"
const { user, clear } = useUserSession()
const menu = [
    { label: 'Home', to: '/', },
    { label: 'About', to: '/#about', },
    { label: 'Why Choose Us', to: '/#why-choose-us', },
    { label: 'Our Services', to: '/#our-services', },
    { label: 'Our Team', to: '/#our-team', },
    { label: 'Newsletter', to: '/newsletter', },
]

const isSidebarOpen = ref(false)

const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value
}

const closeSidebar = () => {
    isSidebarOpen.value = false
}

const logout = async () => {
    await clear()
    await navigateTo('/login')
}

</script>

<style scoped>
/* Fade transition for overlay */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Slide transition for sidebar */
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(-100%);
}
</style>