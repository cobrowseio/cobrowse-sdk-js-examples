import ExternalTransactionView from '../components/ExternalTransactionView'
import { getTransaction } from '../utils/transactions'
import { useLoaderData } from 'react-router-dom'
import styles from './Transaction.module.css'

export const loader = async ({ params }) => {
  const transaction = getTransaction(params.id)

  return { transaction }
}

const Transaction = () => {
  const { transaction } = useLoaderData()

  return (
    <div className={styles.transaction}>
      <ExternalTransactionView
        title={transaction.title}
        date={transaction.formattedDate}
        amount={transaction.formattedAmount}
        category={transaction.category}
      />
    </div>
  )
}

export default Transaction
