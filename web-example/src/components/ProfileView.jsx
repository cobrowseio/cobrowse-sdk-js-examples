import { useState } from 'react'
import ProfileIcon from './ProfileIcon'
import LinkButton from './LinkButton'
import styles from './ProfileView.module.css'
import Redacted from './Redacted'
import { Camera } from './Camera.jsx'

const NAME = 'Frank Spencer'
const EMAIL = 'f.spencer@example.com'

const ProfileView = ({ actions }) => {
  const [isUpdatingProfilePhoto, setIsUpdatingProfilePhoto] = useState(false)
  const [photoVersion, setPhotoVersion] = useState(0)

  const handleProfileIconClick = () => {
    setIsUpdatingProfilePhoto(true)
  }

  const handlePhotoCapture = (imageData) => {
    window.localStorage.setItem('userProfilePhoto', imageData)
    setIsUpdatingProfilePhoto(false)
    setPhotoVersion(v => v + 1)
  }

  const handleCameraClose = () => {
    setIsUpdatingProfilePhoto(false)
  }

  return (
    <div className={styles.profile}>
      <ProfileIcon key={photoVersion} component='button' aria-label='Update profile photo' size='large' invert onClick={handleProfileIconClick} />
      {isUpdatingProfilePhoto
        ? (
          <Camera
            onCapture={handlePhotoCapture}
            onClose={handleCameraClose}
          />
          )
        : undefined}
      <div className={styles.info}>
        <Redacted>
          <div className={styles.name}>{NAME}</div>
        </Redacted>
        <Redacted>
          <div className={styles.email}>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </Redacted>
        <div className={styles.accountSummaryPdf}>
          <LinkButton to='/account_summary.pdf' variant='secondary' target='_blank'>
            View account summary
          </LinkButton>
        </div>
      </div>
      {actions && (
        <div className={`${styles.actions} unredacted`}>
          {actions}
        </div>
      )}
    </div>
  )
}

export default ProfileView
