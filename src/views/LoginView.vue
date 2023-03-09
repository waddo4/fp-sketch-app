<template>
    <div class="max-w-screen-sm mx-auto px-4 py-10">
         <!-- Error handling -->
         <div v-if="errorMsg" class="mb-10 p-4 rounded-md bg-light-grey shadow-lg">
             <p class="text-red-500"> {{ errorMsg }} </p>
         </div>
 
         <!-- Login form -->
         <form @submit.prevent="signInWithEmail"
         class="p-8 flex flex-col bg-zinc-800 rounded-md shadow-lg">
             <h1 class="text-3xl mb-4">Login</h1>
             <div class="flex flex-col mb-2">
                 <label for="email" class="mb-1 text-sm">Email</label>
                 <input autofocus type="text" required class="rounded-sm p-2 text-gray-800 focus:outline-none bg-white" id="email" v-model="email" >
             </div>
 
             <div class="flex flex-col mb-2">
                 <label for="password" class="mb-1 text-sm">Password</label>
                 <input type="password" required class=" rounded-sm p-2 text-gray-800 focus:outline-none bg-white" id="password" v-model="password">
             </div>
 
             <button type="submit"
             class="mt-6 py-2 px-6 rounded-sm self-start text-md text-white duration-200 hover:bg-violet-700 hover:text-white bg-violet-500 mb-3">Login</button>
 
             <p class="mb-1 text-md">Don't have an account? <router-link :to="{name: 'Register'}" class="mb-1 text-md text-violet-400">Register</router-link></p>
         </form>
     </div>
   </template>
   
   <script>
   import { ref } from "vue";
   import { supabase } from '../supabase/supabase'
   import { useRouter } from "vue-router";
   
   export default {
     name: "login",
     setup() {
       // Create data / vars
       const router = useRouter();
       const email = ref(null);
       const password = ref(null);
       const errorMsg = ref(null);
       
       // signInWithEmail function
       const signInWithEmail = async () => {
         try {
             const { error } = await supabase.auth.signInWithPassword({
                 email: email.value,
                 password: password.value,
             });
             if (error) throw error;
             router.push({ name: "Profile"});
             } catch (error) {
                 errorMsg.value = `Error: ${error.message}`;
                 console.log(error.message)
                 setTimeout(() => {
                     errorMsg.value = null;
                 }, 5000);
         }
       }  

       return {email, password, errorMsg, signInWithEmail};
     },
   };
   </script>