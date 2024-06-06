<template>
    <component
        :is="messageType"
        :class="[
            'shadow-sm p-3 rounded-xl mb-4',
            fromUser ? 'float-end rounded-br-none bg-slate-200' : 'float-start rounded-tl-none bg-white',
            message.type != 'text' ? 'w-[90%]' : 'w-[70%]'
        ]"
        :message="message"
    />
    
</template>

<script setup>
import { computed } from 'vue';
import CardMessage from './MessageTypes/CardMessage.vue';
import TextMessage from './MessageTypes/TextMessage.vue';
import WeatherMessage from './MessageTypes/WeatherMessage.vue';

const props = defineProps({
    message: { type: Object, required: true },
    fromUser: { type: Boolean, required: true }
})

const messageType = computed(() => {
    switch(props.message.type) {
        case 'text':
            return TextMessage;
        case 'card': 
            return CardMessage;
        case 'weather': 
            return WeatherMessage;
    }
})

</script>