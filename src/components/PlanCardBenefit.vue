<script setup lang="ts">
import { PlansAPIInfosType } from '../helpers/types/types';


defineProps<{ benefit: PlansAPIInfosType }>()

</script>

<template>
  <div class="plan-card-beneftis">
    icone - {{ benefit.text }}
  </div>
</template>

<style scoped>
</style>
