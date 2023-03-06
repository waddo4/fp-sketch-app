<template>
  <div>
    <Navigation/>
    <router-view />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import {ref} from 'vue';
import { supabase } from "./supabase/supabase";

export default {
  components: {
    Navigation,
  },
  setup() {
    // const appReady = ref(null);

    return {};
  },
};
</script>
