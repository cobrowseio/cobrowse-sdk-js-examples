import Link from './Link'
import styles from './LinkButton.module.css'

const LinkButton = ({ to, variant = 'primary', children, ...props }) => (
  <Link to={to} className={`${styles.linkButton} ${styles[variant]}`} {...props}>{children}</Link>
)

export default LinkButton
