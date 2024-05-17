import styles from './SessionCode.module.css'

const SessionCode = ({ children }) => {
  return (
    <div className={styles.code}>
      {children.slice(0, 3)}
      <span className={styles.separator} />
      {children.slice(3)}
    </div>
  )
}

export default SessionCode
