<script setup>
import sourceData from "./../data.json";

import {reactive} from "vue";
const destinations  = reactive(sourceData.destinations);
</script>

<template>
  <div id="nav">
    <app-link to="/">Vue School Travel App</app-link>
    <app-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="{ name: 'destination.show', params: { slug: destination.slug} }"
    >
      {{ destination.name }}
    </app-link>
    <app-link :to="{name: 'protected'}">Dashboard</app-link>
    <app-link to="https://vueschool.io" >Vue School</app-link>
  </div>
</template>

<style scoped>
#nav .vue-school-active-link {
  border-bottom: 2px solid white;
  font-weight: bold;
}
</style>
