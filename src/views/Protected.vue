<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();
const username = ref(window.user);
const logout = () => {
  window.user = null;
  router.push({name: "home"});
}
</script>

<template>
  <div>
    <h1>Greetings, {{ username }}</h1>
    <button class="btn" @click="logout">Logout</button>
  </div>
</template>
