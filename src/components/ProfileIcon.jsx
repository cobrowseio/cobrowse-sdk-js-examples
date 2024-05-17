import Icon from './Icon'
import styles from './ProfileIcon.module.css'

// TODO: make this clickable (i.e. link to profile page)

const ProfileIcon = ({ size = 'small', invert = false }) => {
  return (
    <div className={`${styles.icon} ${styles[size]} ${invert ? styles.invert : ''}`}>
      <Icon name='person' />
    </div>
  )
}

export default ProfileIcon
