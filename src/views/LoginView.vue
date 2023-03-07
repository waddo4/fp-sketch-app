<template>
    <div class="max-w-screen-sm mx-auto px-4 py-10">
         <!-- Error handling -->
         <div v-if="errorMsg" class="mb-10 p-4 rounded-md bg-light-grey shadow-lg">
             <p class="text-red-500"> {{ errorMsg }} </p>
         </div>
 
         <!-- Login form -->
         <form @submit.prevent="signInWithEmail"
         class="p-8 flex flex-col bg-green-300 rounded-md shadow-lg">
             <h1 class="text-3xl text-slate-700 mb-4">Login</h1>
             <div class="flex flex-col mb-2">
                 <label for="email" class="mb-1 text-sm text-slate-700">Email</label>
                 <input type="text" required class="p-2 text-gray-500 focus:outline-none bg-white" id="email" v-model="email">
             </div>
 
             <div class="flex flex-col mb-2">
                 <label for="password" class="mb-1 text-sm text-slate-700">Password</label>
                 <input type="password" required class="p-2 text-gray-500 focus:outline-none bg-white" id="password" v-model="password">
             </div>
 
             <button type="submit"
             class="mt-6 py-2 px-6 rounded-sm self-start text-sm text-blue-500 bg-slate-300 duration-200 border-solid border-purple-400 border-2 border-transparent hover:border-green-500 hover:bg-purple-400 hover:text-white">Login</button>
 
             <p class="mb-1 text-md text-slate-900">Don't have an account? <router-link :to="{name: 'Register'}" class="mb-1 text-md text-blue-700">Register</router-link></p>
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