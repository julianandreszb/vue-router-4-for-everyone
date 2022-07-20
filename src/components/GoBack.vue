<script setup>
import {useRouter} from "vue-router";

const router = useRouter();
</script>

<template>
  <span class="go-back">
    <button @click="router.back()">Go Back</button>
  </span>
</template>
