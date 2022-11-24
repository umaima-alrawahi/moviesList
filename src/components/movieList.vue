<script setup>
 import { walkBlockDeclarations } from '@vue/compiler-core';
import { ref, onErrorCaptured, onMounted, computed } from 'vue'
import router from '../router';

const yearFilter = ref([]);
const filterTitle = ref('');
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

  const moviesSnapshot = computed(() => {
  return filteredMovies.value;
});

function filterByTitle(film) {
  if (filterTitle.value.length < 2) return true;
  const lowerCaseTitle = filterTitle.value.toLowerCase();
  return film.title.toLowerCase().includes(lowerCaseTitle);
}
function filterByYear(film) {
  // (yearsSelected.value.length === 0) means no years were selected
  if (yearFilter.value.length === 0) return true;
  return yearFilter.value.includes(film.release_date);
}

  console.log(data)
  const moviesSnapshotYear = computed(() => {
  const yearsSet = new Set();
  data.value.forEach(m => {

    yearsSet.add(m.release_date);
  });
  //return movies;
  console.log(yearsSet);
  const array = Array.from(yearsSet).sort();
  console.log(array);
  return array;

});

const filteredMovies = computed(() => {
  const fm = data.value
    .filter(filterByYear)
    .filter(filterByTitle);
  return fm;
});

</script>

<template>

<div>
  <label style="font-size: 15px;" for=""> Entear a movie title: </label>
  <input  v-model="filterTitle" type="text" /> <br/>
  <label style="font-size: 15px;" for=""> Select a year or more! </label> <br/>
  <select  name="" id="width" v-model="yearFilter" multiple>
    <option v-for="year in moviesSnapshotYear">
      {{ year }}   
    </option>
  </select>
</div>
  

  <section>
    <div class="card" v-for="film in moviesSnapshot" :key="film.id">
      
      
    <router-link
    :to="{ name: 'film-info', params: { id: film.id } }"
    >

        <div class="item">
          <h3> Movie Title: 
            {{ film.title }}
          </h3>
          
          <p>
            Reating score: {{ film.rt_score }}
          </p>
        </div>
          
          <img style="width:50%" :src="film.image" /><br />
          <button @click="goto(film.id)">go to this film</button>

    </router-link> 

  </div>
  </section>

  
  
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#width{
 width:80px;   
 border-radius: 10px;
}

header {
  text-align: center;
  font-size: 4vmin;
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
  display: table;
  background-color: aliceblue;

}


.card:hover {
  height: 280px;
  box-shadow: 0 8px 8px 0 rgba(0,0,0,0.2);
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


body{
  background-color: rgb(225, 229, 229);
}
h3{
  font-style: unset;
  font-family: 'Times New Roman', Times, serif;
  color: blue;
}
p{
  font-family: 'Courier New', Courier, monospace;
  font-style:italic;
  color: blue;
}
button{
  font-family: 'Times New Roman', Times, serif;
  width: 30;
  font-size: small;

  border-color: rgb(88, 88, 96);
}
input{
  border-radius: 16px 16px 16px 16px;
}

</style>