import styles from './Content.module.css'
import { forwardRef } from 'react'

const Content = forwardRef(({ children }, ref) => {
  return (
    <div className={styles.content} ref={ref}>
      {children}
    </div>
  )
})

export default Content
