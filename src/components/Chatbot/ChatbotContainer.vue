<template>
    <section id="mainContainer" class="bg-gray-100 w-full overflow-y-auto relative flex flex-col">
        <MessageContainer class="flex-auto"/>
        <SuggestionsBox class="flex-none" />
    </section>
</template>

<script setup>
import SuggestionsBox from "./container/SuggestionsBox.vue";
import MessageContainer from "./container/MessageContainer.vue";

</script>

<style scoped>

</style>