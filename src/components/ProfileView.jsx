import ProfileIcon from './ProfileIcon'
import styles from './ProfileView.module.css'
import Redacted from './Redacted'

const NAME = 'Frank Spencer'
const EMAIL = 'f.spencer@demo.com'

const ProfileView = ({ actions }) => {
  return (
    <div className={styles.profile}>
      <ProfileIcon size='large' invert />
      <div className={styles.info}>
        <Redacted>
          <div className={styles.name}>{NAME}</div>
        </Redacted>
        <Redacted>
          <div className={styles.email}>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </Redacted>
      </div>
      {actions && (
        <div className={styles.actions}>
          {actions}
        </div>
      )}
    </div>
  )
}

export default ProfileView
