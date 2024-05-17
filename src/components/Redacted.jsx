import styles from './Redacted.module.css'

const Redacted = ({ autoWidth = false, children }) => (
  <div className={`redacted ${autoWidth ? styles.autoWidth : ''}`}>{children}</div>
)

export default Redacted
