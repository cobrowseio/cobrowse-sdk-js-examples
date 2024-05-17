import styles from './Icon.module.css'

const Icon = ({ name }) => {
  return (
    <span className={`material-symbols-outlined ${styles.icon}`}>{name}</span>
  )
}

export default Icon
