<script setup lang="ts">
import { PlansAPIType } from '../helpers/types/types';
import PlanCardBenefit from './PlanCardBenefit.vue';

defineProps<{ plan: PlansAPIType }>()

</script>

<template>
  <v-card>
    <v-card-item>
      <v-card-title>
        icone - divider- {{ plan.type }}
      </v-card-title>
      <v-card-subtitle>
        {{ plan.description }}
      </v-card-subtitle>
    </v-card-item>
    <v-card-text>
      <!-- fazer um helper para valores em dinheiro -->
      <h1>R${{ plan.price.month }}/mês</h1>
      <h2>R${{ plan.price.year }}/ano</h2>
      <div v-for="benefit in plan.infos">
        <PlanCardBenefit :benefit="benefit" :key="benefit.id" />
      </div>
      <p class="">
        {{ plan.observation }}
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn color="success" variant="flat" class="text-none">Solicitar plano</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
</style>
