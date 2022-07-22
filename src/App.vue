<script setup>
import TheNavigation from "./components/TheNavigation.vue";
import {useRoute} from "vue-router"

const route = useRoute();
</script>

<template>
  <the-navigation></the-navigation>
  <div class="container">
    <router-view v-slot="{Component}" class="view left-sidebar" name="LeftSidebar" >
      <transition name="slide" mode="out-in" >
        <component :is="Component" :key="route.path"></component>
      </transition>
    </router-view>

    <router-view v-slot="{Component}" class="main-view" >
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

.container {
  display: flex;
}

.left-sidebar {
  width: 20%;
}

.main-view {
  width: 100%;
}
</style>
