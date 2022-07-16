<script setup>
import sourceData from "./../data.json";

import {reactive} from "vue";
const destinations  = reactive(sourceData.destinations);

</script>

<template>
  <div class="home" >
    <h1>All Destinations</h1>
    <div class="destinations">
      <router-link
          v-for="destination in destinations"
          :key="destination.id"
          :to="destination.slug"
      >
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name" >
      </router-link>
    </div>
  </div>
</template>

<style scoped>

</style>
