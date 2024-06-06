<template>
     <div id="messageContainer" class="p-4 overflow-y-auto">
		<transition-group
			enter-active-class="transition ease-in duration-200"
			enter-from-class="opacity-0 translate-y-full"
		>
			<ChatMessage 
				v-for="(message, index) in messages"
				:key="index"
				:message="message"
				:fromUser="message.fromUser"
			/>
		</transition-group>
	</div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import ChatMessage from "./ChatMessage.vue";

const store = useStore()
const messages = computed(() => {
	return store.state.messages
})

onMounted( () => {
	setTimeout(() => {
		store.commit('addMessage', { type: 'text', text: '¡Hola, humano! ¿Cómo te puedo ayudar? 🤖', fromUser: false })
	}, 600)
})
	

</script>

<style>

#messageContainer::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}


#messageContainer::-webkit-scrollbar
{
	width: 8px;
	background-color: #F5F5F5;
}


#messageContainer::-webkit-scrollbar-thumb
{
	border-radius: 6px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #5b5b5b;
}
</style>