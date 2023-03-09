<template>
    <div class="max-w-screen-sm mx-auto px-4 py-10">
      <div class="p-8 flex flex-col items-center bg-zinc-800 rounded-md shadow-lg ">
        <h1 class="flex text-5xl mb-4">Papillon</h1>
          
          <router-link :to="{name: 'Login'}" custom v-slot="{ navigate }">
            <button @click="navigate"
              role="link"
              class="mt-6 py-2 px-8 rounded-lg text-md text-white duration-200 bg-violet-500 hover:bg-violet-700 hover:text-white">
              Login
            </button>
          </router-link>

          <router-link :to="{name: 'Register'}" custom v-slot="{ navigate }">
            <button @click="navigate"
              role="link"
              class="mt-6 py-2 px-6 rounded-lg text-md text-white duration-200 bg-violet-500 hover:bg-violet-700 hover:text-white">
              Register
            </button>
          </router-link>
        </div>
     </div>
</template>

<script>

export default {
  name: "Home",
};
      
</script>