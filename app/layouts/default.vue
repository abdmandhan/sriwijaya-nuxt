<template>
    <div class="flex min-h-screen flex-col">
        <navbar />
        <main class="mt-16 xl:mt-24 flex-1 bg-[#F8F9FD]">
            <slot />
        </main>
        <sfooter />
    </div>
</template>