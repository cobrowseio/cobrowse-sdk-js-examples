import { currentMonth, getTransactions, groupByCategory, groupByMonth } from '../utils/transactions'
import { useLoaderData } from 'react-router-dom'
import { categories } from '../data/categories'
import Chart from '../components/Chart'
import styles from './Dashboard.module.css'
import { formatAmount } from '../utils/formatAmount'
import Redacted from '../components/Redacted'

const BALANCE = 2495.34

export const loader = async () => {
  const transactions = groupByMonth(getTransactions())
  const currentMonthTransactions = currentMonth(transactions)
  const currentMonthSpentAmount = currentMonthTransactions.reduce((acc, transaction) => acc + transaction.amount, 0)
  const currentMonthTransactionsByCategory = groupByCategory(currentMonthTransactions)

  return { currentMonthTransactionsByCategory, currentMonthSpentAmount }
}

const Dashboard = () => {
  const { currentMonthTransactionsByCategory, currentMonthSpentAmount } = useLoaderData()

  return (
    <>
      <div className={styles.balance}>
        <p className={styles.heading}>Balance</p>
        <Redacted>
          <p className={styles.amount}>{formatAmount(BALANCE)}</p>
        </Redacted>
      </div>
      <Chart
        categories={categories}
        currentMonthTransactionsByCategory={currentMonthTransactionsByCategory}
        currentMonthSpentAmount={currentMonthSpentAmount}
      />
    </>
  )
}

export default Dashboard
