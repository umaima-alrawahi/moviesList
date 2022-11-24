<script setup>
import { toRef } from 'vue';
const props = defineProps(['film']);
const filmRef = toRef(props, 'film');
</script>
<template>
    <img
    v-if="filmRef.image"
    style="width: 130px"
    :src="filmRef.image"
  />
  <table class="center">
  <tr >
    <th>
      original title:
    </th>
    <th>
      original title romanised:
    </th>
    <th>
      description:
    </th>
  </tr>
  <tr>
    <td>
      {{ filmRef.original_title }}
    </td>
    
    <td>
      {{ filmRef.original_title_romanised }}
    </td>

    <td>
      {{ filmRef.description }}
    </td>
  </tr>
    
  </table>
  <h5>movie banner</h5>
  <img
    v-if="filmRef.movie_banner"
    style="width: 400px"
    :src="filmRef.movie_banner"
  />
</template>

<style>
table {
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  border-collapse: collapse;
  width: 100%;
  font-size: small;
}

td, th {
  border: 1px solid #927474;
  text-align: center;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f9f7f7;
}
img{
  border-color: rgb(64, 69, 67);
  border-width: 2m;
  border-style: outset;
}

img:hover{
  border-color: rgb(241, 247, 245);
  border-width: 15m;

  box-shadow: inset;

}
</style>