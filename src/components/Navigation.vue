<template>
    <header class="text-indigo-600 bg-slate-300">
        <nav class="container py-5 px-4 flex flex-col gap-4 items-center sm:flex-row">
            <div class="flex items-center gap-x-4">
                <h1 class="text-lg">Sketch app</h1>
            </div>
            <ul class="flex flex-1 justify-end gap-x-10">
                <router-link class="cursor-pointer" :to="{ name: 'Home'}">Home</router-link> 
                <router-link class="cursor-pointer" :to="{ name: 'Login' }">Login</router-link>
                <router-link class="cursor-pointer" :to="{ name: 'Register' }">Register</router-link>
                <router-link class="cursor-pointer" :to="{ name: 'Draw' }">Draw</router-link>
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