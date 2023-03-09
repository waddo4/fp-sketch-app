<template>
    <div class="max-w-screen-sm mx-auto px-4 py-6">
      <div class="p-8 flex flex-col items-center bg-zinc-800 rounded-lg shadow-lg ">
        <img src="../assets/images/Papillon-2.png" alt="Papillon logo" class="w-96 h-96">
          <p id="text" class="text-2xl italic pt-2">Symmetry in sketching</p>
          
          <router-link :to="{name: 'Login'}" custom v-slot="{ navigate }">
            <button  @click="navigate"
              id="button"
              role="link"
              class="mt-6 py-2 px-8 rounded-lg text-md text-white duration-200 bg-violet-500 hover:bg-violet-700 hover:text-white">
              Login
            </button>
          </router-link>

          <router-link :to="{name: 'Register'}" custom v-slot="{ navigate }">
            <button @click="navigate"
              id="button"
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

<style>
    #button {
      font-family: "nunito", sans-serif;
      font-weight: 400;
      font-style: normal;
    }
    #text {
      font-style: italic;
      font-weight: 200;
    }
</style>