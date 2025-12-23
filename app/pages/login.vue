<script setup lang="ts">
const { loggedIn, user, fetch: refreshSession } = useUserSession()
const credentials = reactive({
    email: 'admin@gmail.com',
    password: '12341234',
})
async function login() {
    try {
        await $fetch('/api/login', {
            method: 'POST',
            body: credentials,
        })

        console.log('here', user.value, loggedIn.value);
        // Refresh the session on client-side and redirect to the home page
        await refreshSession()
        await navigateTo('/')
    } catch {
        alert('Bad credentials')
    }
}
</script>

<template>
    <form @submit.prevent="login" class="flex items-center justify-center h-screen w-full text-black">
        <input v-model="credentials.email" type="email" placeholder="Email">
        <input v-model="credentials.password" type="password" placeholder="Password">
        <button type="submit">
            Login 2
        </button>
    </form>
</template>