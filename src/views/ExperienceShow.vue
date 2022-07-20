<script setup>
import {useRoute} from "vue-router"
import initData from "../tools.js"
import {onMounted, ref} from "vue";

const route = useRoute();
let destination = ref(null);
let experience = ref(null);

onMounted(async () => {
  destination.value = await initData(route.params.slug);
  experience.value = destination.value.experiences.find(experience => experience.slug === route.params.experienceSlug);
});
</script>

<template>
  <section v-if="experience">
    <h1>{{ experience.name }}</h1>
    <img :src="`/images/${experience.image}`" :alt="experience.name">
    <p>{{ experience.description }}</p>
  </section>
</template>

<style scoped>

</style>
