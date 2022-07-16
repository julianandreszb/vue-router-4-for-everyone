<script setup>
import {useRoute} from "vue-router"
import {computed, reactive} from "vue";
import sourceData from "./../data.json";

const destinations = reactive(sourceData.destinations);

const route = useRoute();
const destinationId = computed(() => parseInt(route.params.id))
const destination = computed(() => {
  return destinations.find(destination => destination.id === destinationId.value);
});
console.log(destination);
</script>

<template>
  <section class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details" >
      <img :src="`/images/${destination.image}`" :alt="destination.name">
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>

<style scoped>
</style>
