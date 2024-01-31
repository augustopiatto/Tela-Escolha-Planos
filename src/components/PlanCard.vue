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

function formatedText(text: string) {
  return text.replace(/diminuir custo/g, '<strong class="pcs-bold">diminuir custo</strong>').replace(/informações isentas/g, '<strong class="pcs-bold">informações</strong>')
}
</script>

<template>
  <v-card variant="flat" max-width="260" class="plan-card">
    <v-card-item>
      <v-card-title class="pc-title">
        <img :src="leaf" alt="digifarmz-leaf" class="pct-digifarmz-icon" />
        <v-divider vertical length="10px" role="presentation" class="pct-divider"></v-divider>
        <v-chip :variant="chipVariant" size="small" density="comfortable" class="pct-text">{{ plan.type }}</v-chip>
      </v-card-title>
      <v-card-subtitle>
        <!-- só uso v-html porque é código local -->
        <p class="pc-subtitle" v-html="formatedText(plan.description)"></p>
      </v-card-subtitle>
    </v-card-item>
    <v-card-text>
      <!-- fazer um helper para valores em dinheiro -->
      <h1 class="pc-price-month">R${{ plan.price.month }}<span class="pcpm-unit">/mês</span></h1>
      <h2 class="pc-price-year">R${{ plan.price.year }}<span class="pcpy-unit">/ano</span></h2>
      <div v-for="benefit in plan.infos" class="pc-benefits">
        <PlanCardBenefit :benefit="benefit" :key="benefit.id" />
      </div>
      <p class="pc-observation">
        * {{ plan.observation }}
      </p>
    </v-card-text>
    <v-card-actions class="pc-actions">
      <v-btn color="success" variant="flat" class="pca-button">Solicitar plano</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped lang="scss">
.plan-card {
  .pc-title {
    display: flex;
    align-items: center;
    gap: 8px;

    .pct-digifarmz-icon {
      height: 24px;
      width: auto;
      margin: auto 0px;
    }

    .pct-divider {
      margin-top: 7px;
    }

    .pct-text {
      font-size: 11px;
      font-weight: bold;
    }
  }

  .pc-subtitle {
    font-size: 12px;
    color: #42414a;
    text-wrap: wrap;
    margin-top: 10px;

    .pcs.bold {
      font-weight: 600;
    }
  }

  .pc-price-month {
    font-size: 36px;
    font-weight: 900;
    line-height: 40px;
    color: #16113E;
    margin-top: 14px;
  
    .pcpm-unit {
      font-size: 16px;
      font-weight: 500;
      color: #666384;
      margin-left: 4px;
    }
  }
  
  .pc-price-year {
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    color: #16113E;
    margin-bottom: 24px;

    .pcpy-unit {
      font-size: 12px;
      font-weight: 500;
      color: #666384;
      margin-left: 4px;
    }
  }

  .pc-benefits {
    margin-top: 14px;
  }

  .pc-observation {
    margin-top: 24px;
    font-size: 10px;
    font-weight: 500;
    line-height: 12px;
    color: #8C8AA3;
  }

  .pc-actions {
    padding: 0 16px;

    .pca-button {
      text-transform: initial;
      font-weight: 600;
      letter-spacing: -0.05px;
    }
  }
}
</style>
