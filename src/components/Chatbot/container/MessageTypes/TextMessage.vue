<template>
    <div>
        {{ message.text }}
    </div>
</template>

<script setup>

const props = defineProps({
    message: { type: Object, required: true }
})

</script>