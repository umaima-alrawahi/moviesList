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
    <label >Director:{{film.director}}</label>
    <label >Producer:{{film.producer}}</label><br/>
    | <router-link :to="{ name: 'film-info' }">info</router-link> |
    <router-link :to="{ name: 'star-rating' }">star-rating</router-link> |
  </div>
  
</template>

<style>
label{
  font-size: 12px; padding: 1em; font-style: italic;
}

</style>