<template>
    <header>
        <nav>
            <div>
                <h1>Sketch app</h1>
            </div>
            <ul>
                <router-link :to="{ name: 'Home'}">Home</router-link> 
                <router-link :to="{ name: 'Login' }">Login</router-link>
                <router-link :to="{ name: 'Register' }">Register</router-link>
                <router-link to="/protected">Protected</router-link>
            </ul>
        </nav>
    </header>
  </template>
  
  <script> 
  import { supabase } from '../supabase/supabase'
  import { useRouter } from 'vue-router';

  export default {
    setup() {
      // Get user from store
      // Setup ref to router
      const router = useRouter();
      // Logout function
      const logout = async () => {
        await supabase.auth.signOut();
        router.push("Home");
      };

      return { logout };
    },
  };
  </script>