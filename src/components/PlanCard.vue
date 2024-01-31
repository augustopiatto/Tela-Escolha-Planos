<script setup lang="ts">
import { PlansAPIType } from '../helpers/types/types';
import PlanCardBenefit from './PlanCardBenefit.vue';
import leaf from '../assets/svg/digi-farmz-leaf.svg'
import { computed } from 'vue'

const props = defineProps<{ plan: PlansAPIType }>()

// const chipBackground = computed(() => {
//   const colors = {
//     "Light": null,
//     "Pro": 'success',
//     "Full": "linear-CanvasGradient(to right, green, yellow)"
//   }
//   return colors[props.plan.type]
// })

const chipVariant = computed(() => {
  return props.plan.type === "Light" ? "text" : "flat"
})
</script>

<template>
  <v-card class="plan-card">
    <v-card-item>
      <v-card-title class="pc-title">
        <img :src="leaf" alt="digifarmz-leaf" class="digifarmz-icon" />
        <v-divider vertical length="10px" role="presentation" class="pct-divider"></v-divider>
        <v-chip :variant="chipVariant" size="small" density="comfortable" class="pct-text">{{ plan.type }}</v-chip>
      </v-card-title>
      <v-card-subtitle>
        <p class="pc-subtitle">{{ plan.description }}</p>
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
.plan-card {}

.pc-title {
  display: flex;
  align-items: center;
  gap: 8px;
}

.pct-text {
  font-size: 11px;
  font-weight: bold;
}

.pc-subtitle {
  font-size: 12px;
  color: #646183;
  text-wrap: wrap;
  margin-top: 20px;
}

.digifarmz-icon {
  height: 24px;
  width: auto;
  margin: auto 0px;
}
</style>
