import { useState } from 'react'
import Button from '../components/Button'
import LinkButton from '../components/LinkButton'
import Main from '../components/Main'
import ProfileView from '../components/ProfileView'
import SessionCode from '../components/SessionCode'
import { useAuth } from '../hooks/useAuth'
import { useCobrowse } from '../hooks/useCobrowse'
import { clearTransactions } from '../utils/transactions'

const Profile = () => {
  const { logout } = useAuth()
  const { cobrowsing, createSessionCode } = useCobrowse()
  const [sessionCode, setSessionCode] = useState(null)

  const handleLogout = () => {
    clearTransactions()
    logout()
  }
  const handleCreateSessionCode = async () => {
    const code = await createSessionCode()

    setSessionCode(code)
  }

  return (
    <Main>
      <ProfileView
        actions={(
          <>
            {sessionCode && (
              <SessionCode>{sessionCode}</SessionCode>
            )}
            {!cobrowsing && (
              <>
                <Button onClick={handleCreateSessionCode}>Get session code</Button>
                <LinkButton variant='secondary' to='/present'>Agent present mode</LinkButton>
              </>
            )}
            <Button variant='link' onClick={handleLogout}>Logout</Button>
          </>
        )}
      />
    </Main>
  )
}

export default Profile
