<template>
    <header>
        <nav class="py-5 px-4 flex justify-between flex-col gap-4 items-center sm:flex-row">
            <div class="flex items-center gap-x-4">
                <router-link :to="{name: 'Home'}" class="mb-1 text-md"><h1 class="text-4xl mr-10 ml-10" id="logo">Papillon</h1></router-link>
                    <ul class="flex flex-1 justify-end gap-x-10">
                        <router-link v-if="user?.email" class="cursor-pointer hover:text-violet-400 text-xl" :to="{ name: 'Profile' }">Profile</router-link>
                        <router-link v-if="user?.email" class="cursor-pointer hover:text-violet-400 text-xl" :to="{ name: 'Draw' }">Draw</router-link>
                        <router-link v-if="user?.email" class="cursor-pointer hover:text-violet-400 text-xl" :to="{ name: 'Gallery' }">Gallery</router-link>
                    </ul>
            </div>
            <div class="flex flex-row gap-4 mr-6">
                <h1 v-if="user?.email" class="font-bold text-xl">{{ user.email }}</h1>
                <button v-if="user?.email" @click="signOut" class="hover:text-violet-400 ml-4 text-lg">Logout</button>
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
                if (user) {
                    this.user = reactive(user);
                } else {
                    this.user = {}
                }
                }
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

 <style>
    #logo {
        font-family: "flood-std", sans-serif;
    }
</style>