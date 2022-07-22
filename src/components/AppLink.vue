<script setup>
import {RouterLink} from "vue-router";
import {defineProps, computed} from "vue";

const props = defineProps({
  ...RouterLink.props
});

const isExternal = computed(()=> typeof props.to === "string" && props.to.startsWith('http'));

</script>

<template>
  <div>
    <a target="_blank" rel="noopener"  v-if="isExternal" :href="props.to" class="external-link" ><slot /></a>
    <router-link v-else v-bind="props" class="internal-link" ><slot/></router-link>
  </div>
</template>
