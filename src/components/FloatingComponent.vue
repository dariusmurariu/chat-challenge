<template>
    <transition
        leave-active-class="transition ease-out duration-300"
        leave-to-class="opacity-0 transform translate-y-full"
    >
        <AvatarBox v-if="!isOpened" />
    </transition>


    <!-- Chatbot window -->
    <transition
      enter-active-class="transition ease-in duration-150"
      enter-from-class="opacity-0 scale-y-50"
      leave-active-class="transition ease-out duration-150"
      leave-to-class="opacity-0 translate-y-16"
    >
      <Chatbot v-if="isOpened" />
    </transition>
</template>

<script setup>
import Chatbot from '@/components/Chatbot/Chatbot.vue'
import AvatarBox from './AvatarBox.vue';
import { computed } from "vue";
import { useStore } from 'vuex'

const store = useStore()
const isOpened = computed(() => { return store.state.isOpened})

</script>
