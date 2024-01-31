export const convertMoney = (money: number) => {
  let newValue
  if (money.toString().includes(".")) {
    newValue = money.toLocaleString('pt-BR', {
      minimumFractionDigits: 2
    })
  } else {
    newValue = money.toLocaleString('pt-BR')
  }
  return `R$${newValue}`
}
