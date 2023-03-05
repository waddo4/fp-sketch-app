<template>
    <div>
        <!-- Error handling -->
        <div v-if="errorMsg">
            <p> {{ errorMsg }} </p>
        </div>

        <!-- Registration form -->
        <form @submit.prevent="register">
            <h1>Register</h1>
            <div>
                <label for="email">Email</label>
                <input type="text" required id="email" v-model="email">
            </div>

            <div>
                <label for="password">Password</label>
                <input type="password" required id="password" v-model="password">
            </div>

            <div>
                <label for="confirmPassword">Confirm Password</label>
                <input type="password" required id="confirmPassword" v-model="confirmPassword">
            </div>

            <button type="submit">Register</button>

            <p>Already have an account? <router-link :to="{name: 'Login'}">Login</router-link></p>
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
                router.push({ name: "Login" });
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