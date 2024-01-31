<script setup lang="ts">
import { PlansAPIInfosType } from '../helpers/types/types';


defineProps<{ benefit: PlansAPIInfosType }>()

</script>

<template>
  <div class="plan-card-benefits">
    icone - {{ benefit.text }}
  </div>
</template>

<style scoped>
.plan-card-benefits {
}
</style>
