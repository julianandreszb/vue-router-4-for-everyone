<script setup>
import {useRoute} from "vue-router"
import {onMounted, ref} from "vue";

const route = useRoute();
let destination = ref(null);

const initData = async () => {
  const response = await fetch(`https://travel-dummy-api.netlify.app/${route.params.slug}.json`);
  destination.value = await response.json();
}

onMounted(async () => {
    await initData();
});
</script>

<template>
  <section v-if="destination" class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name">
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>

<style scoped>
</style>
