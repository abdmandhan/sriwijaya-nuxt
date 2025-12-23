<template>
    <nav class="flex justify-around items-center p-4 fixed top-0 left-0 w-full z-10 bg-white shadow-lg ">
        <NuxtImg src="/logo.png" alt="logo" width="200" />
        <ul class="gap-4 hidden md:flex">
            <li v-for="item in menu" :key="item.to">
                <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
            </li>
        </ul>
        <div v-if="user">
            {{ user?.name }}
            <UButton variant="ghost" @click="logout">Logout</UButton>
        </div>
    </nav>
</template>

<script lang="ts" setup>
const { user, clear } = useUserSession()
const menu = [
    { label: 'Home', to: '/', },
    { label: 'About', to: '#about', },
    { label: 'Why Choose Us', to: '#why-choose-us', },
    { label: 'Our Services', to: '#our-services', },
    { label: 'Our Team', to: '#our-team', },
    { label: 'Newsletter', to: '/newsletter', },
]

const logout = async () => {
    await clear()
    await navigateTo('/login')
}

</script>