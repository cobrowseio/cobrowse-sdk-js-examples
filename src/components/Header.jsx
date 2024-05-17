import EndSessionButton from './EndSessionButton'
import styles from './Header.module.css'
import Link from './Link'
import ProfileIcon from './ProfileIcon'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Link to='/'>
          <h1>Cobrowse</h1>
        </Link>
      </div>
      <div className={styles.actions}>
        <EndSessionButton />
        <Link to={`/profile`}>
          <ProfileIcon />
        </Link>
      </div>
    </header>
  )
}

export default Header
