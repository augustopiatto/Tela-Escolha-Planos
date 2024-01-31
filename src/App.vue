<script setup lang="ts">
import { plans } from './apimock/apimock';

</script>

<template>
  <div class="app">
    <div v-for="plan in plans">
      {{plan}}
    </div>
  </div>
</template>

<style scoped>
.app {
  height: 100vh;
  width: 100vw;
}
</style>
