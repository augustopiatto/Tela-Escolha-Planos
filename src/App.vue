<script setup lang="ts">
import { plans } from './apimock/apimock';
import PlanCard from './components/PlanCard.vue'

</script>

<template>
  <div class="app">
    <div v-for="plan in plans">
      <PlanCard :plan="plan" :key="plan.id" />
    </div>
  </div>
</template>

<style scoped>
.app {
  padding: 64px 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 64px;
  max-width: 70%;
}
</style>
