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
import { sub } from 'date-fns'
import type { DropdownMenuItem } from '@nuxt/ui'
import type { Period, Range } from '~/types'
import { useDashboard } from '~/composeable/useDashboard'

const { isNotificationsSlideoverOpen } = useDashboard()

definePageMeta({
    middleware: ['authenticated'],
    layout: 'admin'
})

const items = [[{
    label: 'New mail',
    icon: 'i-lucide-send',
    to: '/inbox'
}, {
    label: 'New customer',
    icon: 'i-lucide-user-plus',
    to: '/customers'
}]] satisfies DropdownMenuItem[][]

const range = shallowRef<Range>({
    start: sub(new Date(), { days: 14 }),
    end: new Date()
})
const period = ref<Period>('daily')
</script>

<template>
    <UDashboardPanel id="dashboard">
        <template #header>
            <UDashboardNavbar title="Dashboard" :ui="{ right: 'gap-3' }">
                <template #leading>
                    <UDashboardSidebarCollapse />
                </template>

                <template #right>
                    <UTooltip text="Notifications" :shortcuts="['N']">
                        <UButton color="neutral" variant="ghost" square @click="isNotificationsSlideoverOpen = true">
                            <UChip color="error" inset>
                                <UIcon name="i-lucide-bell" class="size-5 shrink-0" />
                            </UChip>
                        </UButton>
                    </UTooltip>

                    <UDropdownMenu :items="items">
                        <UButton icon="i-lucide-plus" size="md" class="rounded-full" />
                    </UDropdownMenu>
                </template>
            </UDashboardNavbar>

            <!-- <UDashboardToolbar>
                <template #left>
                    <HomeDateRangePicker v-model="range" class="-ms-1" />

                    <HomePeriodSelect v-model="period" :range="range" />
                </template>
            </UDashboardToolbar> -->
        </template>

        <template #body>
            Welcome!
            <!-- <HomeStats :period="period" :range="range" />
            <HomeChart :period="period" :range="range" />
            <HomeSales :period="period" :range="range" /> -->
        </template>
    </UDashboardPanel>
</template>