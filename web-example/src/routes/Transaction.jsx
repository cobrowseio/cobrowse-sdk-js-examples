import { getTransaction } from '../utils/transactions'
import { useLoaderData } from 'react-router-dom'
import TransactionDetails from '../components/TransactionDetails'
import styles from './Transaction.module.css'

export const loader = async ({ params }) => {
  const transaction = getTransaction(params.id)

  return { transaction }
}

const Transaction = () => {
  const { transaction } = useLoaderData()

  return (
    <div className={styles.transaction}>
      <TransactionDetails transaction={transaction} />
    </div>
  )
}

export default Transaction
