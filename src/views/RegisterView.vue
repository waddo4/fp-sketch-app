<template>
    <div class="max-w-screen-sm mx-auto px-4 py-10">
        <!-- Error handling -->
        <div v-if="errorMsg" class="mb-10 p-4 rounded-md bg-light-grey shadow-lg">
            <p class="text-red-500"> {{ errorMsg }} </p>
        </div>

        <!-- Registration form -->
        <form @submit.prevent="register" class="p-8 flex flex-col rounded-md shadow-lg bg-zinc-800">
            <h1 class="text-3xl mb-4">Register</h1>
            <div class="flex flex-col mb-2">
                <label for="email" class="mb-1 text-sm">Email</label>
                <input autofocus type="text" required class="rounded-sm p-2 text-gray-500 focus:outline-none bg-white" id="email" v-model="email" >
            </div>

            <div class="flex flex-col mb-2">
                <label for="password" class="mb-1 text-sm">Password</label>
                <input type="password" required class="rounded-sm p-2 text-gray-500 focus:outline-none bg-white" id="password" v-model="password">
            </div>

            <div class="flex flex-col mb-2">
                <label for="confirmPassword" class="mb-1 text-sm">Confirm Password</label>
                <input type="password" required class="rounded-sm p-2 text-gray-500 focus:outline-none bg-white" id="confirmPassword" v-model="confirmPassword">
            </div>

            <button type="submit" class="mt-6 py-2 px-6 rounded-sm self-start text-md text-white duration-200 hover:bg-violet-700 hover:text-white bg-violet-500 mb-3">Register</button>

            <p class="mb-1 text-md">Already have an account? <router-link :to="{name: 'Login'}" class="mb-1 text-md text-violet-400">Login</router-link></p>
        </form>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { supabase } from '../supabase/supabase'
  import { useRouter } from "vue-router";

  export default {
    name: "register",
    setup() {

      // Create data / vars
      const router = useRouter();
      const email = ref(null);
      const password = ref(null);
      const confirmPassword = ref(null);
      const errorMsg = ref(null);

      // Register function
      const register = async () => {
        if (password.value === confirmPassword.value) {
            try {
                const { error } = await supabase.auth.signUp({
                    email: email.value,
                    password: password.value,
                });
                if (error) throw error;
                router.push({ name: "Profile" });
            } catch(error) {
                errorMsg.value = error.message;
                setTimeout(() => {
                    errorMsg.value = null;
                }, 5000);
            }
            return;
        }
      }

      return {email, password, confirmPassword, errorMsg, register};
    },
  };
  </script>