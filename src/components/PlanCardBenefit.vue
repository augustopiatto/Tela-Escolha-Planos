<script setup lang="ts">
import { PlansAPIInfosType } from '../helpers/types/types';

const props = defineProps<{ benefit: PlansAPIInfosType }>()
</script>

<template>
  <div v-if="props.benefit.included" class="plan-card-benefit-included">
    <v-icon icon="mdi-check-circle" color="success"></v-icon><span class="pcbi-text">{{ benefit.text }}</span>
  </div>
  <div v-else class="plan-card-benefit-not-included">
    <v-icon icon="mdi-check-circle" color="#E0E0E0"></v-icon><span class="pcbni-text">{{ benefit.text }}</span>
  </div>
</template>

<style scoped lang="scss">
.plan-card-benefit-included {
  .pcbi-text {
    font-size: 14px;
    color: #211C48;
    margin-left: 10px;
  }
}

.plan-card-benefit-not-included {
  .pcbni-text {
    font-size: 14px;
    color: #757575;
    margin-left: 10px;
  }
}
</style>
