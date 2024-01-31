<script setup lang="ts">
import { PlansAPIType } from '../helpers/types/types';

defineProps<{ plan: PlansAPIType }>()

</script>

<template>
  <v-card :text="plan.type"></v-card>
</template>

<style scoped>
</style>
