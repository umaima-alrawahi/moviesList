<script setup>
import movieList from '../components/movieList.vue';
import SimpleLoading from '../components/loading/SimpleLoading.vue';
</script>
<template>
  <Suspense>
    <movieList class="container" />
    <template #fallback>

      <SimpleLoading class="container" />

    </template>
  </Suspense>
</template>

