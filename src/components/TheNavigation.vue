<script setup>
import sourceData from "./../data.json";

import {reactive} from "vue";
const destinations  = reactive(sourceData.destinations);
</script>

<template>
  <div id="nav">
    <router-link to="/">Vue School Travel App</router-link>
    <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="{ name: 'destination.show', params: { slug: destination.slug} }"
    >
      {{ destination.name }}
    </router-link>
    <router-link :to="{name: 'protected'}">Dashboard</router-link>
  </div>
</template>

<style scoped>
#nav .vue-school-active-link {
  border-bottom: 2px solid white;
  font-weight: bold;
}
</style>
