<template>
    <!-- radial layer blur -->
    <div class="absolute w-96 h-96 rounded-full z-0 blur-2xl" :class="class" :style="{
        background: 'radial-gradient(circle, rgba(95, 100, 114, 0.6) 0%,  rgba(95, 100, 114, 0) 100%)',
    }">
    </div>
</template>

<script setup>
const props = defineProps({
    class: {
        type: String,
        default: '',
    },
});
</script>