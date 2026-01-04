<template>
    <div class="flex p-4 w-full z-10 bg-[#1D202A] text-white flex-col items-start gap-10 md:grid grid-cols-2 pt-10">
        <div class="flex flex-col gap-2">
            <NuxtImg src="logo-small.png" class="size-10" />

            <span class="font-bold">Shinta Sriwijaya & Co</span>
            <address class="normal-case">
                Wisma 46 - Kota BNI, 48th Floor Jl. Jend. Sudirman Kav. 1, Jakarta 10220
            </address>
        </div>

        <div class="grid grid-cols-2 w-full">
            <div class="w-full flex flex-col gap-2">
                <span class="font-bold">Sitemap</span>
                <ul class="flex flex-col gap-2">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Our Service</li>
                    <li>Our Team</li>
                    <li>Insight</li>
                </ul>
            </div>
            <div class="w-full flex flex-col gap-2">
                <span class="font-bold">Legal</span>
                <ul class="flex flex-col gap-2">
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>

        <div class="grid grid-cols-2 w-full">
            <div class="flex flex-col gap-2">
                <span>Phone</span>
                <a class="font-bold" href="tel:021574508">021 574 508</a>
            </div>
            <div class="flex flex-col gap-2">
                <span>Email</span>
                <a class="font-bold" href="mailto:contact@sscolaw.com">contact@sscolaw.com</a>
            </div>
        </div>

        <div class="border-2 border-primary p-2 rounded-lg flex items-center gap-2 md:w-fit md:justify-self-end">
            Back to Top
            <UIcon name="i-lucide-arrow-up" class="size-4" mode="svg" />
        </div>

        <div class="flex flex-col gap-2 border-t border-white pt-4 w-full md:col-span-2">
            © Shinta Sriwijaya & Co {{ new Date().getFullYear() }}
        </div>
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