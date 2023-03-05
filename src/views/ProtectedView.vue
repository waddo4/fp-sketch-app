<template>
    <div>
        <p>Hello from protected</p>
    </div>
</template>

<script setup>
import { supabase } from '../supabase/supabase';
import { onMounted, ref, toRefs } from 'vue'
import router from '../router/index';
// initialize userSession store
// const props = defineProps(['session']);
// const { session } = toRefs(props)

// onMounted(() => {
//     getProfile()
// });

// logout function
const logOut = async () => {
    try {
        const { error } = await supabase.auth.signOut().then(router.push('/'))
        if (error) throw error
    } catch (error) {
        alert(error.message)
    }
}
</script>