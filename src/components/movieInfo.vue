<script setup>
import { toRef } from 'vue';
const props = defineProps(['film']);
const filmRef = toRef(props, 'film');
</script>
<template>
  <ul>
    <li>original title: {{ filmRef.original_title }}</li>
    <li>original title romanised: {{ filmRef.original_title_romanised }}</li>
  </ul>
  <img
    v-if="filmRef.image"
    style="width: 100px"
    :src="filmRef.image"
  />
</template>