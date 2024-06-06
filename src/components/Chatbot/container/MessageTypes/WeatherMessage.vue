<template>
    <section>
        <div class="p-3 bg-gradient-to-br from-sky-600 to-sky-400 rounded-lg flex items-center justify-between">
            <div>
                <p class="text-xs"> {{ today }} </p>
                <p class="text-gray-100 text-lg font-bold tracking-wide"> {{ message.data.location }} </p>
                <p class="text-4xl font-bold text-white"> 
                    {{ message.data.temperature }} 
                    <span class="text-xl">ºC</span>
                </p>
            </div>
            <img class="w-[64px]" src="https://seeklogo.com/images/S/sunny-weather-symbol-logo-4E2A5E54AA-seeklogo.com.png" alt="">
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    message: { type: Object, required: true }
})

const today = new Date().toDateString()
</script>