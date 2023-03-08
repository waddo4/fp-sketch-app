<template>
    <h1>Peanut Gallery</h1>
  <ul>
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase/supabase'

const countries = ref([])

async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
}

onMounted(() => {
  getCountries()
})
</script>