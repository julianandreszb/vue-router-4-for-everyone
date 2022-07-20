<script setup>
import TheNavigation from "./components/TheNavigation.vue";
import {useRoute} from "vue-router"

const route = useRoute();
</script>

<template>
  <the-navigation></the-navigation>
  <div class="container">
    <router-view v-slot="{Component}">
      <transition name="slide" mode="out-in" >
        <component :is="Component" :key="route.path"></component>
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>
