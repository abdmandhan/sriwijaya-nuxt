<!-- <script setup lang="ts">


const { user, clear: clearSession } = useUserSession()

async function logout() {
    await clearSession()
    await navigateTo('/login')
}
</script>

<template>
    <div>
        <h1>Welcome {{ user?.name }}</h1>
        <button @click="logout">
            Logout
        </button>
    </div>
</template> -->

<script setup lang="ts">
definePageMeta({
    middleware: ['authenticated'],
    layout: 'admin'
})


</script>

<template>

</template>