import { useEffect, useState } from 'react'
import Icon from './Icon'
import styles from './ProfileIcon.module.css'

const ProfileIcon = ({ size = 'small', invert = false, component: Component = 'div', ...passthroughProps }) => {
  const [profilePhoto, setProfilePhoto] = useState(() => window.localStorage.getItem('userProfilePhoto'))

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedPhoto = window.localStorage.getItem('userProfilePhoto')
      setProfilePhoto(updatedPhoto)
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  return (
    <Component
      {...passthroughProps}
      className={`${passthroughProps.className || ''} ${styles.icon} ${styles[size]} ${invert ? styles.invert : ''} unredacted`}
    >
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
