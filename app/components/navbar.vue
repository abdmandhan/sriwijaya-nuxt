<template>
    <nav class="flex justify-around items-center p-4 absolute top-0 left-0 w-full z-10 bg-white shadow-lg">
        <NuxtImg src="/logo.png" alt="logo" width="200" />
        <ul class="flex gap-4">
            <li v-for="item in menu" :key="item.to">
                <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
            </li>
        </ul>
        <UButton variant="ghost">ENG</UButton>
    </nav>
</template>

<script lang="ts" setup>
const menu = [
    { label: 'Home', to: '/', },
    { label: 'About', to: '/about', },
    { label: 'Why Choose Us', to: '/why-choose-us', },
    { label: 'Our Services', to: '/our-services', },
    { label: 'Our Team', to: '/our-team', },
    { label: 'Newsletter', to: '/newsletter', },
]

</script>