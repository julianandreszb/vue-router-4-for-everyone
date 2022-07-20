<script setup>
import {useRoute} from "vue-router"
import {onMounted, ref} from "vue";
import ExperienceCard from "./../components/ExperienceCard.vue";
import initData from "./../tools.js"

const route = useRoute();
let destination = ref(null);

// const initData = async () => {
//   const response = await fetch(`https://travel-dummy-api.netlify.app/${route.params.slug}.json`);
//   destination.value = await response.json();
// }

onMounted(async () => {
  destination.value = await initData(route.params.slug);
});
</script>

<template>
  <div>
    <section v-if="destination" class="destination">
      <h1>{{ destination.name }}</h1>
      <div class="destination-details">
        <img :src="`/images/${destination.image}`" :alt="destination.name">
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <section v-if="destination" class="experiences">
      <h2>Top Experiences in {{ destination.name }}</h2>
      <div class="cards">
        <router-link
            v-for="experience in destination.experiences"
            :to="{ name: 'experience.show', params: {slug: destination.slug, experienceSlug: experience.slug} }">
          <experience-card :experience="experience"></experience-card>
        </router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>
