import styles from './ExternalTransactionView.module.css'

const BASE_URL = `${import.meta.env.BASE_URL}embeds/transaction.html`

const ExternalTransactionView = ({ title, date, amount, category }) => (
  <iframe
    className={styles.frame}
    title='frame'
    src={`${BASE_URL}?title=${encodeURIComponent(title)}&subtitle=${encodeURIComponent(date)}&amount=${encodeURIComponent(amount)}&category=${encodeURIComponent(category)}`}
    allowFullScreen
  />
)

export default ExternalTransactionView
