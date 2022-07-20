<script setup>
import {defineProps} from "vue";

defineProps({
  experience: {
    required: true,
    type: Object
  }
});

</script>

<template>
  <div class="card">
    <img :src="`/images/${experience.image}`" :alt="experience.name">
    <span class="card__text">
      {{ experience.name }}
    </span>
  </div>
</template>

<style scoped>

</style>
