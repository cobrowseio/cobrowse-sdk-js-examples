import LocaleCurrency from 'locale-currency'

export const formatAmount = (amount) => {
  // If for some reason the language is not available, default to en-US
  const language = navigator.language ?? 'en-US'
  // If the currency for the language can't be found, default to USD
  const currency = LocaleCurrency.getCurrency(language) ?? 'USD'

  return amount.toLocaleString(language, {
    style: 'currency',
    currency
  })
}
