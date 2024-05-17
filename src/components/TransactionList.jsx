import TransactionListItem from './TransactionListItem'
import styles from './TransactionList.module.css'
import { forwardRef } from 'react'

const TransactionList = forwardRef(({ transactions }, ref) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Transactions</h2>
      <div className={styles.list} ref={ref}>
        {Object.keys(transactions).map((month) => (
          <div key={month}>
            <div className={styles.month}>
              {month}
            </div>
            <div>
              {transactions[month].map((transaction) => (
                <TransactionListItem key={transaction.id} transaction={transaction}/>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
})

export default TransactionList
