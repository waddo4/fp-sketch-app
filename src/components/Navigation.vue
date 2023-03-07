<template>
    <header class="text-indigo-600 bg-slate-300">
        <nav class="container py-5 px-4 flex flex-col gap-4 items-center sm:flex-row">
            <div class="flex items-center gap-x-4">
                <router-link :to="{name: 'Home'}" class="mb-1 text-md text-blue-700"><h1 class="text-lg">Sketch app</h1></router-link>

                <h1 v-if="user?.email">Welcome {{ user.email }}</h1>
                <button @click="signOut">Logout</button>

            </div>
            <ul class="flex flex-1 justify-end gap-x-10">
                <router-link class="cursor-pointer" :to="{ name: 'Login' }">Login</router-link>
                <router-link class="cursor-pointer" :to="{ name: 'Register' }">Register</router-link>
                <router-link class="cursor-pointer" :to="{ name: 'Draw' }">Draw</router-link>
                <router-link class="cursor-pointer" :to="{ name: 'Profile' }">Profile</router-link>
                <router-link class="cursor-pointer" :to="{ name: 'Gallery' }">Gallery</router-link>
            </ul>
        </nav>
    </header>
</template>
  
<script> 
import { supabase } from '../supabase/supabase';
import {reactive} from 'vue';

    export default {
        mounted() {
            supabase.auth.onAuthStateChange((event, session) => {
                getUser()
            })
                // Getting current user
            const getUser = async () => {
                const { data: { user } } = await supabase.auth.getUser();
                // console.log(user.email)
                if (user) {
                    this.user = reactive(user);
                } else {
                    this.user = {}
                }
                }
            // getUser()
                },
        data() {
        return { user: {}}
        },
        methods: {
            // Logout function
            async  signOut() {
                try {
                    let { error } = await supabase.auth.signOut()
                    if (error) throw error
                } catch (error) {
                    console.log(error.message)
                } finally {
                    this.$router.push("/")
                }
            }
        }
  };
 </script>