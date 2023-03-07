<template>
    <header class="text-indigo-600 bg-slate-300">
        <nav class="container py-5 px-4 flex flex-col gap-4 items-center sm:flex-row">
            <div class="flex items-center gap-x-4">
                <h1 class="text-lg">Sketch app</h1>

                <h1 v-if="user?.email">Welcome {{ user.email }}</h1>
                <button @click="signOut">Logout</button>

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

    export default {
        mounted() {
                // Getting current user
            const getUser = async () => {
                const { data: { user } } = await supabase.auth.getUser();
                console.log(user.email)
                return { user };
                }
            getUser()

                // Logout function
            async function signOut() {
                try {
                    let { error } = await supabase.auth.signOut()
                    if (error) throw error
                } catch (error) {
                    console.log(error.message)
                } finally {
                    router.push("Home")
                }
            }
                return { signOut };
                },
        data() {
        return { user: {}}
}
  };
 </script>