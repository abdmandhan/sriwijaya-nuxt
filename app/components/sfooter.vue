<template>
    <div class="flex justify-around items-center p-4 w-full z-10 bg-white">
        footer
    </div>
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