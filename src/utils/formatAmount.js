import LocaleCurrency from 'locale-currency'

export const formatAmount = (amount) => {
  return amount.toLocaleString(navigator.language, {
    style: 'currency',
    currency: LocaleCurrency.getCurrency(navigator.language)
  })
}