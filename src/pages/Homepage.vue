<template>
    <div class="bg-gray-200">
        <header class="w-full py-6 bg-[#EF5350] flex flex-col items-center shadow">
            <img class="w-[260px]" src="@/assets/1MB_logo_b.png" alt="">
            
            <h1 class="text-3xl text-white font-bold border-2 border-white px-6 py-2 rounded">Chat Challenge</h1>
        </header>
        <section class="p-16">
            <h3 class="font-bold text-3xl py-2">Details of the challenge:</h3>
            <ul class="my-4 list-disc space-y-2">
                <li>I used Vue.js v3.0</li>
                <li>Tailwind CSS was a big ally for the responsive design and the efficiency. 🙂</li>
                <li>Instead of making a mess with child/parent communication by using emits, I used <strong>Vuex</strong> in order to centralize everything.</li>
                <li>For the Chatbot animations I used the transition component.</li>
                <li>The messages from the chatbot must be different from the user ones, positioning them right and left its the easiest way to fullfill this one 😉. [Check ✅]</li>
                <li>The image and the name of the chatbot must appear so that the user knows at all times who they are talking to. [Check ✅] </li>
                <li>The chat window must have a drop-down menu to select options such as forgetting user data, changing the language or accessing the privacy policy. [Check ✅] <i>Functionality added only to "Forget Data/Olvidar mis datos"</i> </li>
                <li>I have implemented Chat Buttons as well in order to not only send text messages. You can find them at the bottom of the message container.</li>
                <li>Pre chatbot call to action display. [Added ✅]</li>
            </ul>
        </section>
        <FloatingComponent/>
    </div>
   
</template>

<script setup>
import FloatingComponent from '@/components/FloatingComponent.vue';


</script>