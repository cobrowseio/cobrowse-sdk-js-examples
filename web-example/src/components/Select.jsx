import styles from './Select.module.css'

const Select = ({ value = '', onChange, children, ...props }) => {
  return (
    <select
      id="camera-select"
      value={value}
      onChange={onChange}
      className={styles.select}
      {...props}
    >
      {children}
    </select>
  )
}

export default Select
