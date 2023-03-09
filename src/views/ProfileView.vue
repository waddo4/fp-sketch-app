<template>
    <div class="max-w-screen-sm mx-auto px-4 py-10">
        <div class="p-8 flex flex-col items-center bg-zinc-800 rounded-md shadow-lg ">
            <h1 class="text-3xl">Profile</h1>

            <router-link :to="{name: 'Draw'}" custom v-slot="{ navigate }">
            <button @click="navigate"
              role="link" class="mt-6 py-2 px-6 rounded-md text-md text-white duration-200 bg-orange-500 hover:bg-indigo-700 hover:text-white ">CREATE NEW WORK</button>
            </router-link>
            <button class="mt-6 py-2 px-6 rounded-md text-md text-white duration-200 bg-orange-600 hover:bg-indigo-700 hover:text-white ">SHOW ALL YOUR WORKS</button>
        </div>
    </div>
</template>

<script>

</script>