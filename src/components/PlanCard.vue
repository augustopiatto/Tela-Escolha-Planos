<script setup lang="ts">
import { PlansAPIType } from '../helpers/types/types';
import PlanCardBenefit from './PlanCardBenefit.vue';
import leaf from '../assets/svg/digifarmz-leaf.svg'
import { computed } from 'vue'
import { convertMoney } from '../helpers/functions/helpers.ts'

const props = defineProps<{ plan: PlansAPIType }>()

const chipVariant = computed(() => {
  return props.plan.type === "light" ? "text" : "flat"
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
        <v-chip :variant="chipVariant" :class="props.plan.type" size="small" density="comfortable" class="pct-text">{{ plan.type }}</v-chip>
      </v-card-title>
      <v-card-subtitle>
        <!-- só uso v-html porque é código local -->
        <p class="pc-subtitle" v-html="formatedText(plan.description)"></p>
      </v-card-subtitle>
    </v-card-item>
    <v-card-text class="pc-card-text">
      <div class="pcdt-wrapper">
        <h1 v-if="plan.type === 'full'" class="pcctw-price-year">{{ convertMoney(plan.price.month) }} +</h1>
        <h1 v-else class="pcctw-price-month">{{ convertMoney(plan.price.month) }}<span v-if="plan.type !== 'Full'"
            class="pcctwpm-unit">/mês</span><span v-else>+</span></h1>
        <h2 v-if="plan.type === 'full'" class="pcctw-price-month">{{ convertMoney(plan.price.year) }}<span
            class="pcctwpm-unit">/ha por ano</span></h2>
        <h2 v-else class="pcctw-price-year">{{ convertMoney(plan.price.year) }}<span class="pcctwpy-unit">/ano</span></h2>
      </div>
      <div v-for="benefit in plan.infos" class="pc-benefits">
        <PlanCardBenefit :benefit="benefit" :key="benefit.id" />
      </div>
      <p class="pc-observation">
        * {{ plan.observation }}
      </p>
    </v-card-text>
    <v-card-actions class="pc-actions">
      <v-dialog width="500">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" color="success" variant="flat" class="pca-button">Solicitar plano</v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card title="Parabéns!">
            <v-card-text>
              Você irá adquirir um excelento produto. Siga para a tela de pagamento
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                text="Fechar"
                class="text-none"
                @click="isActive.value = false"
              ></v-btn>
              <v-btn
                text="Continuar"
                class="text-none"
                color="success"
                variant="flat"
                @click="isActive.value = false"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-card-actions>
  </v-card>
</template>

<style scoped lang="scss">
.v-chip.pro {
  background-color: #1CA63B;
}
.v-chip.full {
  background: linear-gradient(to right, green, rgb(175, 144, 22));
}
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
      text-transform: capitalize;
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

  .pc-card-text {
    margin-top: 20px;

    .pcdt-wrapper {
      margin-bottom: 28px;
      display: flex;
      flex-direction: column;
      gap: 4px;

      .pcctw-price-month {
        font-size: 36px;
        font-weight: 900;
        line-height: 40px;
        color: #16113E;
        display: flex;
        align-items: center;
  
        .pcctwpm-unit {
          font-size: 16px;
          font-weight: 500;
          color: #666384;
          margin-left: 4px;
        }
      }
      
      .pcctw-price-year {
        font-size: 14px;
        font-weight: 700;
        line-height: 16px;
        color: #16113E;
        display: flex;
        align-items: center;
  
        .pcctwpy-unit {
          font-size: 12px;
          font-weight: 500;
          color: #666384;
          margin-left: 4px;
        }
      }
    }
  }

  .pc-benefits {
    margin-top: 14px;
  }

  .pc-observation {
    margin-top: 32px;
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
