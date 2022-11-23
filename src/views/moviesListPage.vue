<script setup>
import movieList from '../components/movieList.vue';
</script>
<template>
  <Suspense>
    <movieList class="container" />
    <template #fallback>
    </template>
  </Suspense>
</template>