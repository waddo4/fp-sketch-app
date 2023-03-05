<template>
   <div>
        <!-- Error handling -->
        <div v-if="errorMsg">
            <p> {{ errorMsg }} </p>
        </div>

        <!-- Login form -->
        <form @submit.prevent="signInWithEmail">
            <h1>Login</h1>
            <div>
                <label for="email">Email</label>
                <input type="text" required id="email" v-model="email">
            </div>

            <div>
                <label for="password">Password</label>
                <input type="password" required id="password" v-model="password">
            </div>

            <button type="submit">Login</button>

            <p>Don't have an account? <router-link :to="{name: 'Register'}">Register</router-link></p>
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
            router.push({ name: "Home" });
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