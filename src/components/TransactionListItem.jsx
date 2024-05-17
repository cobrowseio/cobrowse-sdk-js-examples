// noinspection JSValidateTypes

import Icon from './Icon'
import styles from './TransactionListItem.module.css'
import Link from './Link'
import Redacted from './Redacted'

const TransactionListItem = ({ transaction }) => {
  return (
    <Link to={`transactions/${transaction.id}`} className={styles.item}>
      <div className={styles.details}>
        <div className={styles.icon} style={{ '--icon-color': transaction.color }}>
          <Icon name={transaction.icon} />
        </div>
        <div className={styles.description}>
          <Redacted autoWidth>
            <div className={styles.title}>{transaction.title}</div>
          </Redacted>
          <Redacted autoWidth>
            <div className={styles.date}>{transaction.formattedDate}</div>
          </Redacted>
        </div>
      </div>
      <Redacted>
        <div className={styles.amount}>{transaction.formattedAmount}</div>
      </Redacted>
    </Link>
  )
}

export default TransactionListItem
