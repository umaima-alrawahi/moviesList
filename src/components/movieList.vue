<script setup>
 import { walkBlockDeclarations } from '@vue/compiler-core';
import { ref, onErrorCaptured } from 'vue'
const data = ref({})

const options = {
  method: 'GET',
  // We don't actually need headers for this API call
  // but if we did, we can add them here:
  // headers: {
  //   'X-RapidAPI-Key': `${import.meta.VITE_API_KEY}`,
  //   'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
  // }
};

  // adding delay
  await new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })

  onErrorCaptured((err) => {
    // error processing
  })


 
  

  const res = await fetch('https://ghibliapi.herokuapp.com/films', options );

  console.log(res)
  
  if (!res.ok) {
    throw new Error()
  }
  
  data.value = await res.json()
 
</script>

<template>
  <div class="card" v-for="film in data" :key="film.id">

        <div class="container">
          <h3> Movie Title: 
            {{ film.title }}
          </h3>
          <p>
            Reating score: {{ film.rt_score }}
          </p>
        </div>
          
          <img style="width:50%" :src="film.image" />

      

  </div>
  
</template>

<style>
.card{
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 100%;
}
.card:hover {
  box-shadow: 0 8px 8px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 8px;
}
</style>