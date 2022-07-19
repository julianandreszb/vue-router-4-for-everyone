<script setup>
import TheNavigation from "./components/TheNavigation.vue";
import {useRoute} from "vue-router"
const route = useRoute();
</script>

<template>
  <the-navigation></the-navigation>
  <div class="container" >
    <router-view :key="route.path"></router-view>
  </div>
</template>

<style scoped>
</style>
