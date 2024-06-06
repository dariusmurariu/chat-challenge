<template>
    <div
        id="avatarBox" 
        v-if="!dontShow"
        class="fixed bottom-4 right-6"
    >
        
            <div @click="toggleWindow" class="flex items-center gap-4">
                <!-- Call to Action-->
                <div 
                    class="hidden sm:block bg-white p-4 cursor-pointer rounded-full rounded-br-none"
                >
                    <p>¡Hola, soy Wall·e! 🤖 ¿Hablamos?</p>
                </div>
                <!-- Bot Avatar-->
                <div
                    id="chatbotImage"
                    class="w-[120px] h-[120px] rounded-full bg-chatbot-walle bg-cover bg-orange-200 bg-center shadow-[0px_0px_6px_1px_#707070] cursor-pointer hover:scale-95 hover:transition hover:duration-300"
                >
                </div>
            </div>

        <!-- Dont show button -->
        <i class="fa fa-xmark absolute right-0 top-0 cursor-pointer" @click="dontShow = true"></i>
    </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from 'vuex'

const dontShow = ref(false)
const store = useStore()
const isOpened = computed(() => { return store.state.isOpened})

const toggleWindow = () => { store.commit('toggleWindow') }
</script>