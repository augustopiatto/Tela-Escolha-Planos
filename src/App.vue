<script setup lang="ts">
import { plans } from './apimock/apimock';
import PlanCard from './components/PlanCard.vue'

</script>

<template>
  <v-row class="app">
    <v-col v-for="plan in plans" md="3">
      <PlanCard :plan="plan" :key="plan.id" />
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
.app {
  padding: 64px 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 50px;
  margin: 0 auto;
}
</style>
