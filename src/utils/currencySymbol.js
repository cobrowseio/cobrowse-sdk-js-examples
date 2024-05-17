import getSymbolFromCurrency from 'currency-symbol-map'
import LocaleCurrency from 'locale-currency'

export const currencySymbol = () => {
  const currencyCode = LocaleCurrency.getCurrency(navigator.language)

  return getSymbolFromCurrency(currencyCode)
}
