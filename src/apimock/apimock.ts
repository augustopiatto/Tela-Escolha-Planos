import { PlansAPIType } from "../helpers/types/types";

const plans: PlansAPIType[] = [
  {
    id: 1,
    type: "Light",
    description: "Indicado para quem busca informações isentas sobre insumos",
    price: { month: 59, year: 490 },
    infos: [
      {
        id: 1,
        text: "Catálogo de fungicidas",
        included: true
      },
      {
        id: 2,
        text: "Catálogo de cultivares de soja e trigo",
        included: true
      },
      {
        id: 3,
        text: "Simulação de fungicidas para soja e trigo",
        included: false
      },
      {
        id: 4,
        text: "Comparação de fungicidas",
        included: false
      },
      {
        id: 5,
        text: "Eficácias de fungicidas",
        included: false
      },
      {
        id: 6,
        text: "Acompanhamento na produtividade em +8 sc/ha",
        included: false
      },
      {
        id: 7,
        text: "Integração com FieldView",
        included: false
      },
      {
        id: 8,
        text: "Integração com SAP",
        included: false
      },
      {
        id: 9,
        text: "Relatórios personalizados",
        included: false
      }
    ],
    // Aqui está com número "1" e no resto por texto, tem que padronizar
    observation: "Disponibilizamos 1 usuário, sem acessos simultâneos"
  },
  {
    id: 2,
    type: "Pro",
    description: "Indicado para quem quer diminuir custo na compra de insumos",
    price: { month: 490, year: 4990 },
    infos: [
      {
        id: 1,
        text: "Catálogo de fungicidas",
        included: true
      },
      {
        id: 2,
        text: "Catálogo de cultivares de soja e trigo",
        included: true
      },
      {
        id: 3,
        text: "Simulação de fungicidas para soja e trigo",
        included: true
      },
      {
        id: 4,
        text: "Comparação de fungicidas",
        included: true
      },
      {
        id: 5,
        text: "Eficácias de fungicidas",
        included: true
      },
      {
        id: 6,
        text: "Acompanhamento na produtividade em +8 sc/ha",
        included: false
      },
      {
        id: 7,
        text: "Integração com FieldView",
        included: false
      },
      {
        id: 8,
        text: "Integração com SAP",
        included: false
      },
      {
        id: 9,
        text: "Relatórios personalizados",
        included: false
      }
    ],
    observation: "Disponibilizamos um usuário, com a possibilidade de aquisição de novas contas pelo valor de R$ 120,00 por usuário por mês"
  },
  {
    id: 3,
    type: "Full",
    // Essa descrição está igual a do plano Light, avisar quando mandar e-mail
    description: "Indicado para quem busca informações isentas sobre insumos",
    price: { month: 4990, year: 4.9 },
    infos: [
      {
        id: 1,
        text: "Catálogo de fungicidas",
        included: true
      },
      {
        id: 2,
        text: "Catálogo de cultivares de soja e trigo",
        included: true
      },
      {
        id: 3,
        text: "Simulação de fungicidas para soja e trigo",
        included: true
      },
      {
        id: 4,
        text: "Comparação de fungicidas",
        included: true
      },
      {
        id: 5,
        text: "Eficácias de fungicidas",
        included: true
      },
      {
        id: 6,
        text: "Acompanhamento na produtividade em +8 sc/ha",
        included: true
      },
      {
        id: 7,
        text: "Integração com FieldView",
        included: true
      },
      {
        id: 8,
        text: "Integração com SAP",
        included: true
      },
      {
        id: 9,
        text: "Relatórios personalizados",
        included: true
      }
    ],
    observation: "Disponibilizamos um usuário, com a possibilidade de aquisição de novas contas pelo valor de R$120,00 por usuário por mês"
  },
];

export { plans }
