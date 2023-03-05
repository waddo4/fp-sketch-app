<template>
    <div class="max-w-screen-sm mx-auto px-4 py-10">
      <div class="p-8 flex flex-col items-center bg-green-300 rounded-md shadow-lg ">
             <h1 class=" flex text-3xl text-slate-700 mb-4 ">Sketch app</h1>

             <router-link :to="{name: 'Login'}" custom v-slot="{ navigate }">
              <button @click="navigate"
                role="link"
                class=" mt-6 py-2 px-6 rounded-sm text-sm text-blue-500 bg-slate-300 duration-200 border-solid border-purple-400 border-2 border-transparent hover:border-green-500 hover:bg-purple-400 hover:text-white">
                Login
              </button>
             </router-link>

             <router-link :to="{name: 'Register'}" custom v-slot="{ navigate }">
              <button @click="navigate"
                role="link"
                class="mt-6 py-2 px-6 rounded-sm text-sm text-blue-500 bg-slate-300 duration-200 border-solid border-purple-400 border-2 border-transparent hover:border-green-500 hover:bg-purple-400 hover:text-white">
                Register
              </button>
             </router-link>
        </div>
     </div>
</template>

<script>

export default {
  name: "Home",
  components: {},
  setup() {
    // Create data / vars
    // Get data
    // Run data function
    return {};
  },
};
</script>