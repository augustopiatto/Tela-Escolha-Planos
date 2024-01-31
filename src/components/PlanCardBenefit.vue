<script setup lang="ts">
import { PlansAPIInfosType } from '../helpers/types/types';


defineProps<{ benefit: PlansAPIInfosType }>()

</script>

<template>
  <div class="plan-card-benefits">
    <v-icon icon="mdi-check-circle" color="success"></v-icon><span>{{ benefit.text }}</span>
  </div>
</template>

<style scoped>
.plan-card-benefits {}
</style>
