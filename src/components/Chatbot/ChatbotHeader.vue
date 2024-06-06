<template>
    <header class="w-full p-2 bg-orange-400 flex items-center justify-between text-white rounded-t z-10">
        <div id="leftItems" class="flex items-center gap-4">
            <i class="ml-2 fa fa-minus cursor-pointer" @click="closeWindow"></i>
            <div id="chatbotInfo" class="flex items-center">
                <img class=" mr-2 w-[68px] h-[68px] sm:w-[54px] sm:h-[54px] rounded-full bg-white" src="@/assets/chatbot-walle.png" alt="Walle Avatar">
                <p class="font-bold">WALL<span class="mx-0.5">·</span>E</p>
            </div>
        </div>
        <i class="mx-2 cursor-pointer" :class="[showSubmenu ? 'fa fa-xmark' : 'fa fa-bars']" @click="showSubmenu = !showSubmenu"></i>
    </header>
     <!-- Dropdown Menu-->
     <div v-if="showSubmenu" id="dropdownMenu" class="w-fit absolute right-0 top-16 bg-white text-black rounded-b-lg shadow-md z-10">
        <ul>
            <li class="cursor-pointer hover:bg-amber-100 p-2" @click="forgetData">Olvidar datos</li>
            <li class="cursor-pointer hover:bg-amber-100 p-2">Cambiar idioma</li>
            <li class="cursor-pointer hover:bg-amber-100 p-2">Política de privacidad</li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from "vue"
import { useStore } from 'vuex'

const store = useStore()
const showSubmenu = ref(false)

const closeWindow = () => {
    store.commit('toggleWindow')
}

const forgetData = () => {
    store.commit('forgetData')
    showSubmenu.value = false
}

</script>    
