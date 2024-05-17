import Link from './Link'
import styles from './LinkButton.module.css'

const LinkButton = ({ to, variant = 'primary', children }) => (
  <Link to={to} className={`${styles.linkButton} ${styles[variant]}`}>{children}</Link>
)

export default LinkButton
