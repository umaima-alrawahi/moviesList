<script setup>
import { ref, onErrorCaptured, onMounted, computed } from 'vue'
const { id } = defineProps(['id']);
const emit = defineEmits(['loaded']);
const film = ref({})

const options = {
  method: 'GET',
  // We don't actually need headers for this API call
  // but if we did, we can add them here:
  // headers: {
  //   'X-RapidAPI-Key': `${import.meta.VITE_API_KEY}`,
  //   'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
  // }
};


  

  const res = await fetch(`https://ghibliapi.herokuapp.com/films/${id}`, options );

  console.log(res)
  
  if (!res.ok) {
    throw new Error()
  }
  
  film.value = await res.json()
  emit('loaded', film.value);

 
</script>

<template>
   <div>
    <h2>{{ film.title }}</h2>
    <router-link :to="{ name: 'film-info' }"></router-link> 
  </div>
  
</template>

<style>

</style>