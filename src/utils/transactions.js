import { endOfMonth, startOfMonth, subMonths } from 'date-fns'
import { formatAmount } from './formatAmount'
import { formatDate } from './formatDate'
import { categories } from '../data/categories'
// crypto.generateUUID() is not available in a non-local unsecure context
import { v4 as uuidv4 } from 'uuid'
import { remove, retrieve, store } from './storage'

const TRANSACTIONS_KEY = 'transactions'

const generateTransactions = (numberOfTransactions) => {
  const categoryKeys = Object.keys(categories)
  const startDate = startOfMonth(subMonths(new Date(), 3))
  const endDate = endOfMonth(subMonths(new Date(), 1))
  const transactions = []

  for (let i = 0; i < numberOfTransactions; i++) {
    const categoryKey = categoryKeys[categoryKeys.length * Math.random() << 0]

    transactions.push(generateTransaction(categoryKey, startDate, endDate))
  }

  return transactions
}

const generateTransaction = (categoryKey, startDate, endDate) => {
  const category = categories[categoryKey]
  const title = category.titles[Math.floor(Math.random() * category.titles.length)]
  const [min, max] = category.amountRange
  const amount = (Math.floor(Math.random() * (max - min)) + min) / 100
  const hours = Math.floor(Math.random() * 24)
  const minutes = Math.floor(Math.random() * 60)
  const date = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()))

  date.setHours(hours)
  date.setMinutes(minutes)

  return {
    id: uuidv4(),
    category: categoryKey,
    categoryLabel: category.label,
    title,
    amount,
    formattedAmount: formatAmount(amount),
    date,
    formattedDate: formatDate(date),
    color: category.color,
    icon: category.icon
  }
}

const generateCurrentMonthTransactions = () => {
  const categoryKeys = ['childcare', 'groceries', 'utilities']
  const transactions = []

  categoryKeys.forEach((categoryKey) => {
    transactions.push(generateTransaction(categoryKey, startOfMonth(new Date()), new Date()))
  })

  return transactions
}

const sortTransactions = (transactions) => {
  return transactions.toSorted((a, b) => b.date - a.date)
}

export const getTransactions = () => {
  const cachedTransactions = retrieve(TRANSACTIONS_KEY, [])

  if (cachedTransactions.length) {
    return cachedTransactions
  }

  // We split the transactions into two arrays to make sure the current month transactions are distributed more equally
  // in the graph view
  const newTransactions = sortTransactions([...generateTransactions(30), ...generateCurrentMonthTransactions()])

  store(TRANSACTIONS_KEY, newTransactions)

  return newTransactions
}

export const getTransaction = (id) => {
  return retrieve(TRANSACTIONS_KEY, []).find(transaction => transaction.id === id)
}

export const groupByMonth = (transactions) => transactions.reduce((grouped, transaction) => {
  const monthYear = new Date(transaction.date).toLocaleDateString('default', { month: 'long', year: 'numeric' })

  if (!grouped[monthYear]) {
    grouped[monthYear] = []
  }

  grouped[monthYear].push(transaction)

  return grouped
}, {})

export const groupByCategory = (transactions) => transactions.reduce((grouped, transaction) => {
  const { category } = transaction

  if (!grouped[category]) {
    grouped[category] = []
  }

  grouped[category].push(transaction)

  return grouped
}, {})

export const currentMonth = (transactions) => {
  return transactions[Object.keys(transactions)[0]]
}

export const clearTransactions = () => {
  remove(TRANSACTIONS_KEY)
}
