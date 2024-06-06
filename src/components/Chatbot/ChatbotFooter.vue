<template>
    <footer class="bg-white w-full">
        <div id="typingBar" class="flex justify-between items-center w-full shadow-[0px_-1px_5px_0px_#c4c4c4]">
            <input class="w-full pl-6 focus:outline-none" type="text" v-model="inputMessage" placeholder="Escribe tu pregunta..." @keyup.enter="onEnterMessage">
            <i @click="onEnterMessage" class="cursor-pointer fa fa-paper-plane text-white text-xl bg-orange-400 hover:bg-orange-500 px-6 py-4 rounded-ss-3xl"></i>
        </div>
        <div class="w-full text-sm sm:text-[12px] text-center bg-neutral-800 tracking-wide text-white py-1">BY DARIUS ✌</div>
    </footer>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore()
const inputMessage = ref('')

const randomMessages = [
    { type: 'text', text: 'Mi nombre es Wall·e y voy a ser tu ayudante en este pequeño viaje. 👾', fromUser: false },
    { type: 'text', text: '¿Sabías que mi mejor compañera es Millie? 👩', fromUser: false },
    { type: 'text', text: 'Estoy aquí para ayudarte en todo lo que necesites.', fromUser: false },
    { type: 'text', text: 'Si no sabes qué preguntarme, puedes pulsar alguno de los botones de sugerencias 👇', fromUser: false },


]

const onEnterMessage = () => {
    const data = { type: 'text', text: inputMessage.value, fromUser: true }
    store.commit('addMessage', data)
    inputMessage.value = ''

    setTimeout(() => {
        let randomPosition = Math.floor(Math.random() * 4)
        store.commit('addMessage', randomMessages[randomPosition])
    }, 600)
}

</script>