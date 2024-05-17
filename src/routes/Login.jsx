import Button from '../components/Button'
import EndSessionButton from '../components/EndSessionButton'
import { useAuth } from '../hooks/useAuth'
import styles from './Login.module.css'
import { currencySymbol } from '../utils/currencySymbol'
import Input from '../components/Input'
import { useState } from 'react'
import Redacted from '../components/Redacted'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()

  const handleLogin = (event) => {
    event.preventDefault()

    login(email)
  }

  const loginButtonDisabled = () => {
    return email === '' || password === ''
  }

  return (
    <div className={styles.login}>
      <div className={styles.endSessionButton}>
        <EndSessionButton />
      </div>
      <form className={styles.form} onSubmit={handleLogin}>
        <div className={styles.currency}>
          {currencySymbol()}
        </div>
        <div className={styles.inputs}>
          <p>Please enter your details</p>
          <Redacted>
            <Input type='text' placeholder='Email' autoComplete='email' onChange={(e) => setEmail(e.target.value)}/>
          </Redacted>
          <Redacted>
            <Input
              type='password'
              placeholder='Password'
              autoComplete='current-password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </Redacted>
        </div>
        <Button disabled={loginButtonDisabled()} onClick={handleLogin}>Login</Button>
      </form>
    </div>
  )
}

export default Login
