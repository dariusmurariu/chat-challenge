<template>
    <aside class="sm:mb-2 fixed bottom-0 right-0 w-screen h-screen sm:w-[380px] sm:h-[550px] bg-white rounded shadow-[0px_0px_8px_0px_#969696] flex flex-col">
        <ChatbotHeader class="flex-none"/>
        <ChatbotContainer class="flex-auto" />
        <ChatbotFooter class="flex-none"/>      
    </aside>
</template>

<script setup>
import ChatbotHeader from '@/components/Chatbot/ChatbotHeader.vue';
import ChatbotContainer from './ChatbotContainer.vue';
import ChatbotFooter from './ChatbotFooter.vue';
</script>