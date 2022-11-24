<script setup>
import { ref } from 'vue';
import movieDetail from '../components/movieDetail.vue';
import SimpleLoading from '../components/loading/SimpleLoading.vue';
const { id } = defineProps(['id']);
const film = ref({});

function setfilm(m) {
  film.value = m;
}
</script>
<template>
  <Suspense>
    <div class="container">
      <movieDetail :id="id" @loaded="setfilm" />
      <router-view :film="film"></router-view>
    </div>

    <template #fallback>
      <SimpleLoading class="container" />
    </template>
  </Suspense>
</template>