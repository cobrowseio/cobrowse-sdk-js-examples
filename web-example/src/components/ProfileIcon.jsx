import { useEffect, useState } from 'react'
import Icon from './Icon'
import styles from './ProfileIcon.module.css'
import { useLocalStorage } from '../hooks/useLocalStorage'

const ProfileIcon = ({ size = 'small', invert = false, component: Component = 'div', HoverIcon, ...props }) => {
  const [storedProfilePhoto] = useLocalStorage('userProfilePhoto')
  const [profilePhoto, setProfilePhoto] = useState(() => storedProfilePhoto)

  useEffect(() => {
    setProfilePhoto(storedProfilePhoto)
  }, [storedProfilePhoto])

  return (
    <Component
      {...props}
      className={`${props.className || ''} ${styles.icon} ${styles[size]} ${invert ? styles.invert : ''} unredacted`}
    >
      {HoverIcon && (
        <div className={`${styles.hoverIcon} ${!profilePhoto ? styles.opaque : ''}`} aria-hidden="true">
          <HoverIcon />
        </div>
      )}
      {profilePhoto
        ? (
          <img
            src={profilePhoto}
            alt='Profile'
            className={styles.profileImage}
          />
          )
        : (
          <Icon name='person' />
          )}
    </Component>
  )
}

export default ProfileIcon
