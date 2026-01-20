<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui';
import type { mailboxes } from '@prisma/client';

const UButton = resolveComponent('UButton')

definePageMeta({
    layout: 'admin',
    middleware: ['authenticated'],
})

const toast = useToast();

const { data: mailboxes, refresh } = await useFetch('/api/admin/mailboxes/list', { server: false, lazy: true })

const columns: TableColumn<mailboxes>[] = [
    {
        accessorKey: 'name',
        header: 'Name',
        cell: ({ row }) => {
            return h('div', row.original.name)
        },
    },
    {
        accessorKey: 'email',
        header: 'Email',
        cell: ({ row }) => {
            return h('div', row.original.email)
        },
    },
    {
        accessorKey: 'question',
        header: 'Question',
        cell: ({ row }) => {
            return h('div', row.original.question)
        },
    },
    {
        accessorKey: 'is_read',
        header: 'Read',
        cell: ({ row }) => {
            return h('div', row.original.is_read ? 'Yes' : 'No')
        },
    },
    {
        accessorKey: 'createdAt',
        header: 'Created At',
        cell: ({ row }) => {
            return h('div', row.original.createdAt)
        },
    },
    {
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => {
            return h(UButton, {
                variant: 'ghost',
                size: 'sm',
                icon: 'i-lucide-check-circle',
                disabled: row.original.is_read,
                onClick: async () => {
                    await $fetch(`/api/admin/mailboxes/${row.original.id}/read`, {
                        method: 'PUT',
                    })
                    await refresh()
                    toast.add({
                        title: 'Success',
                        description: 'Mailbox marked as read',
                        color: 'success',
                    })
                }
            })
        },
    },
]

</script>

<template>
    <u-card>
        <template #header>
            <h3 class="text-base font-semibold leading-6">Mailboxes</h3>
        </template>

        <u-table :data="mailboxes" :columns="columns" />
    </u-card>
</template>