<template>
    <header>
        <nav v-if="user?.email" class="py-5 px-4 flex justify-between flex-col gap-4 items-center sm:flex-row">
            <div class="flex items-center gap-x-4">
                <router-link :to="{name: 'Home'}" class="mb-1 text-md"><h1 class="text-3xl mr-10">Papillon</h1></router-link>
                    <ul class="flex flex-1 justify-end gap-x-10">
                        <router-link class="cursor-pointer hover:text-violet-400 text-lg" :to="{ name: 'Profile' }">Profile</router-link>
                        <router-link class="cursor-pointer hover:text-violet-400 text-lg" :to="{ name: 'Draw' }">Draw</router-link>
                        <router-link class="cursor-pointer hover:text-violet-400 text-lg" :to="{ name: 'Gallery' }">Gallery</router-link>
                    </ul>
            </div>
            <div class="flex flex-row gap-4 mr-10">
                <h1 v-if="user?.email" class="font-bold">{{ user.email }}</h1>
                <button v-if="user?.email" @click="signOut" class="hover:text-violet-400">Logout</button>
            </div>
        </nav>
    </header>
</template>
  
<script> 
import { supabase } from '../supabase/supabase';
import { reactive } from 'vue';

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