<template>
    <section>
        <div id="card" class="m-2 shadow-md pb-2">
            <img src="@/assets/cala-pinets-benissa-min.jpg" alt="">

            <div class="py-2 px-4 flex flex-col">
                <h3 class="py-2 font-bold">{{ message.data.header }}</h3>
                <p class="text-sm">{{ message.data.content }}</p>
                <hr class="my-2">
                <button class="rounded-full py-1 px-3 bg-neutral-600 text-white">
                    <a :href="message.data.blogUrl" target="_blank">
                        Seguir leyendo
                    </a>
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    message: { type: Object, required: true }
})

console.log(props.message.data.image)

</script>