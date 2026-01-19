<script setup lang="ts">

import type { NavigationMenuItem } from '@nuxt/ui'
import type { DropdownMenuItem } from '@nuxt/ui'
import { useDashboard } from '~/composeable/useDashboard'

const route = useRoute()
const toast = useToast()
const { isNotificationsSlideoverOpen } = useDashboard()


const items = [[{
    label: 'New mail',
    icon: 'i-lucide-send',
    to: '/inbox'
}, {
    label: 'New customer',
    icon: 'i-lucide-user-plus',
    to: '/customers'
}]] satisfies DropdownMenuItem[][]


const open = ref(false)

const links = [[
    {
        label: 'Dashboard',
        icon: 'i-lucide-home',
        to: '/admin',
    },
    {
        label: 'Teams',
        icon: 'i-lucide-users',
        to: '/admin/teams',
    },
    {
        label: 'Newsletter',
        icon: 'i-lucide-newspaper',
        to: '/admin/newsletter',
    },
    {
        label: 'Mailboxes',
        icon: 'i-lucide-mail',
        to: '/admin/mailboxes',
    },
    {
        label: 'App Configs',
        icon: 'i-lucide-settings',
        to: '/admin/app-configs',
    },
]] satisfies NavigationMenuItem[][]

// Compute panel id and title from route
const panelId = computed(() => {
    const pathSegments = route.path.split('/').filter(Boolean)
    const lastSegment = pathSegments[pathSegments.length - 1]
    return lastSegment || 'dashboard'
})

const panelTitle = computed(() => {
    const id = panelId.value
    // Find matching link to get the proper label, or capitalize the id
    const link = links.flat().find(link => {
        const linkPath = link.to.split('/').filter(Boolean)
        const linkLastSegment = linkPath[linkPath.length - 1] || 'dashboard'
        return linkLastSegment === id
    })
    return link?.label || id.charAt(0).toUpperCase() + id.slice(1)
})

onMounted(async () => {
    const cookie = useCookie('cookie-consent')
    if (cookie.value === 'accepted') {
        return
    }

    toast.add({
        title: 'We use first-party cookies to enhance your experience on our website.',
        duration: 0,
        close: false,
        actions: [{
            label: 'Accept',
            color: 'neutral',
            variant: 'outline',
            onClick: () => {
                cookie.value = 'accepted'
            }
        }, {
            label: 'Opt out',
            color: 'neutral',
            variant: 'ghost'
        }]
    })
})
</script>

<template>
    <UDashboardGroup unit="rem">
        <UDashboardSidebar id="default" v-model:open="open" collapsible resizable class="bg-elevated/25"
            :ui="{ footer: 'lg:border-t lg:border-default' }">
            <template #header="{ collapsed }">
                <!-- <TeamsMenu :collapsed="collapsed" /> -->
                <nuxt-img src="/logo.png" alt="logo" class="w-52 md:w-[90%]" v-if="!collapsed" />
                <nuxt-img src="logo-small.png" class="size-10" v-else />
            </template>

            <template #default="{ collapsed }">
                <UNavigationMenu :collapsed="collapsed" :items="links[0]" orientation="vertical" tooltip popover />
            </template>

            <template #footer="{ collapsed }">
                <UserMenu :collapsed="collapsed" />
            </template>
        </UDashboardSidebar>

        <UDashboardPanel :id="panelId">
            <template #header>
                <UDashboardNavbar :title="panelTitle" :ui="{ right: 'gap-3' }">
                    <template #leading>
                        <UDashboardSidebarCollapse />
                    </template>

                    <template #right>
                        <UTooltip text="Notifications" :shortcuts="['N']">
                            <UButton color="neutral" variant="ghost" square
                                @click="isNotificationsSlideoverOpen = true">
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
            </template>

            <template #body>
                <slot />
            </template>
        </UDashboardPanel>
    </UDashboardGroup>
</template>