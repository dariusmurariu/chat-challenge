<template>
    <div id="suggestionsBox" class="bg-gray-50 w-full border-[1px] border-t-neutral-200">
        <small class="p-2">Aquí tienes ideas de lo que me puedes preguntar:</small>
        <div class="flex items-center mt-2 pb-2">
            <div id="navigationLeft" class="hidden sm:block w-[10%]">
                <i 
                    class="cursor-pointer py-2 w-full h-full text-center text-sm fa fa-chevron-left" 
                    @click="scrollLeft">
                </i>
            </div>
            <div id="chatButtons" class="p-1 flex gap-2 text-[12px] overflow-auto whitespace-nowrap w-full sm:w-[80%]">
                <button class="px-4 py-1 bg-orange-200 sm:hover:bg-orange-300 border-[1px] border-orange-300 rounded-full" @click="getSuggestion('madridWeather')">¿Cuál es el tiempo de hoy en Madrid?</button>
                <button class="px-4 py-1 bg-orange-200 sm:hover:bg-orange-300 border-[1px] border-orange-300 rounded-full" @click="getSuggestion('alicanteBeaches')">Mejores playas de Alicante</button>
            </div>
            <div id="navigationRight" class="hidden sm:block w-[10%]">
                <i 
                    class="cursor-pointer py-2 w-full h-full text-center text-sm fa fa-chevron-right"
                    @click="scrollRight">
                </i>
            </div>
            
        </div>
    </div>
</template>


<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore()

/* SUGGESTIONS */
const getSuggestion = (type) => {
    switch (type) {
        case 'madridWeather':
            store.commit('addMessage', { type: 'text', text: '¿Qué temperatura hace en Madrid?', fromUser: true} )
            setTimeout(() => {
                    store.commit('addMessage', {
                    type: 'weather',
                    data: { location: 'Madrid', temperature: '32'},
                    fromUser: false
                })
            }, 1000)
           
            break
        case 'alicanteBeaches':
            store.commit('addMessage', { type: 'text', text: '¿Cuáles son las mejores playas de Alicante?', fromUser: true} )
            setTimeout(() => {
                    store.commit('addMessage', {
                    type: 'card',
                    data: {
                        image: '@/assets/cala-pinets-benissa-min.jpg',
                        header: '5 Mejores playas de Alicante',
                        content: 'La costa de Alicante esconde infinitos y exclusivos rincones en los que disfrutar del mar muy cerca del hotel. Por eso, a continuación, te ofrecemos nuestra particular selección de las mejores calas y playas con encanto para que tu estancia en la Costa Blanca sea inolvidable.',
                        blogUrl: 'https://www.montiboli.com/es/blog/playas-en-alicante-provincia/'
                    },
                    fromUser: false
                })
            }, 1000)
            break
    }
}

/* SCROLL FOR BUTTONS */
const chatButtonsRef = ref(null)
const scrollLeft = () => {
    if (chatButtonsRef.value) {
        chatButtonsRef.value.scrollBy({
            left: -40,
            behavior: 'smooth'
        })
    }
}
const scrollRight = () => {
    if (chatButtonsRef.value) {
        chatButtonsRef.value.scrollBy({
        left: 40,
        behavior: 'smooth'
        });
    }
}

onMounted(() => {
    chatButtonsRef.value = document.getElementById('chatButtons')
})

</script>

<style scoped>
#chatButtons::-webkit-scrollbar{
    display: none;
}
</style>