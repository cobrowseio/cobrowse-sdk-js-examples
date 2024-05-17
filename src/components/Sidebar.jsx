import styles from './Sidebar.module.css'
import { forwardRef } from 'react'

const Sidebar = forwardRef(({ className, children }, ref) => {
  return (
    <nav className={`${styles.sidebar} ${className}`} ref={ref}>
      {children}
    </nav>
  )
})

export default Sidebar
