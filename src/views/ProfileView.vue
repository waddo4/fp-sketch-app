<template>
    <div class="max-w-screen-lg mx-auto px-4">
        <div class="p-8 flex flex-col items-center">
            <h1 class="text-5xl font-bold">Profile</h1>

            <router-link :to="{name: 'Draw'}" custom v-slot="{ navigate }">
            <button @click="navigate"
              role="link" class="mt-6 py-2 px-6 rounded-md text-md text-white duration-200 bg-orange-500 hover:bg-indigo-700 hover:text-white ">CREATE NEW WORK</button>
            </router-link>

            <router-link :to="{name: 'Gallery'}" custom v-slot="{ navigate }">
            <button @click="navigate"
            role="link" class="mt-6 py-2 px-8 rounded-md text-md text-white duration-200 bg-orange-600 hover:bg-indigo-700 hover:text-white ">GALLERY</button>
            </router-link>

            <h1 class="text-3xl py-5">Personal gallery</h1>

            <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
                <div>
                    <img src="../assets/images/Papillon-1.png" alt="" loading="lazy">
                </div>
                <div class="grayscale">
                    <img src="../assets/images/Papillon-3.png" alt="" loading="lazy">
                </div>
                <div class="saturate-200">
                    <img src="../assets/images/Papillon-3.png" alt="" loading="lazy">
                </div>
                <div class="invert">
                    <img src="../assets/images/Papillon-2.png" alt="" loading="lazy">
                </div>
                <div>
                    <img src="../assets/images/Papillon-1.png" alt="" loading="lazy">
                </div>
                <div class="sepia">
                    <img src="../assets/images/Papillon-3.png" alt="" loading="lazy">
                </div>
            </div>

        </div>
    </div>
</template>

<script>

</script>

