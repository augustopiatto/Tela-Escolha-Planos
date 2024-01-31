<script setup lang="ts">
import { PlansAPIType } from '../helpers/types/types';

defineProps<{ plan: PlansAPIType }>()

</script>

<template>
  {{ plan }}
</template>

<style scoped>
</style>
