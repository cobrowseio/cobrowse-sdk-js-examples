import { Link as NavLink, useLocation } from 'react-router-dom'
import styles from './Link.module.css'

const Link = ({ to, className = '', appendQueryString = true, children, ...props }) => {
  const location = useLocation()

  return (
    <NavLink to={to + (appendQueryString ? location.search : '')} className={`${styles.link} ${className}`} {...props}>{children}</NavLink>
  )
}

export default Link
