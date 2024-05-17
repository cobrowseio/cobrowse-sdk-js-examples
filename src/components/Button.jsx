import styles from './Button.module.css'

const Button = ({ variant = 'primary', className = '', children, ...props }) => (
  <button className={`${styles.button} ${styles[variant]} ${className}`} {...props}>{children}</button>
)

export default Button
