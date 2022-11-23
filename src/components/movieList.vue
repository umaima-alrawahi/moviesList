<script setup>
 import { walkBlockDeclarations } from '@vue/compiler-core';
import { ref, onErrorCaptured, onMounted } from 'vue'
import router from '../router';
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


  const res = await fetch('https://ghibliapi.herokuapp.com/films', options );

  console.log(res)
  
  if (!res.ok) {
    throw new Error()
  }
  
  data.value = await res.json()

  function goto(id) {
    router.push({
      name: 'film-info',
      params: { id },
    });
  }
 
</script>

<template>
  <div class="card" v-for="film in data" :key="film.id">
    <router-link
    :to="{ name: 'film-info', params: { id: film.id } }"
    >

        <div class="container">
          <h3> Movie Title: 
            {{ film.title }}
          </h3>
          <p>
            Reating score: {{ film.rt_score }}
          </p>
        </div>
          
          <img style="width:50%" :src="film.image" />
          <button @click="goto(film.id)">go to this film</button>

    </router-link> 

  </div>
  
</template>

<style>
/* .card{
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 100%;
}
.card:hover {
  box-shadow: 0 8px 8px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 8px;
} */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

header {
  text-align: center;
  font-size: 4vmin;
}

.countries {
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.card {
  width: 300px;
  height: 250px;
  cursor: pointer;
  border-radius: 16px;
  box-shadow: 0 0 13px 0px rgba(0, 0, 0, 0.3);
  transition: 0.5s;
  overflow: hidden;
  margin: 0.85rem;
}

.card:hover {
  height: 280px;
}

.card img {
  width: 302px;
  height: 189px;
  border-radius: 16px;
  transition: 0.5s;
}

.card:hover img {
  border-radius: 16px 16px 0 0;
}

.card .card-body {
  padding: 0.5rem 0.85rem 1rem;
  height: 0;
}

.card .card-body h2 {
  margin: 0.5rem 0;
  font-size: 0.85rem;
  color: hsl(240, 27%, 39%);
  letter-spacing: 3px;
}

.card .card-body p {
  text-align: justify;
  font-size: 0.9rem;
  line-height: 25px;
}
</style>