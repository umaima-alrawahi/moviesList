<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import movieList from './components/movieList.vue'
</script>

<template>
  <div>
    <lu>
    <li><RouterLink to="/" >Home</RouterLink></li>
    <li><RouterLink :to="{name : 'about'}" >About</RouterLink> </li>
    <li><router-link class="plain-link" :to="{ name: 'films' }">Films list</router-link></li>
     
  </lu>
  </div>
  
  <main >
 <RouterView></RouterView>
  </main >
<footer>
  <label style="font-size:12px;">Thank u Danii u make it easier than it could be!  || Umaima Alrawahi</label>
</footer>
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;

}

li{
  float: center;
  display: inline;
  padding: 1.5em;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  
  
}

li RouterLink{
 
  display: block;
  padding: 8px;
}

h4{
  font-family: 'Courier New', Courier, monospace;
}





</style>
