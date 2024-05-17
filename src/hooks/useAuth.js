import { useLocalStorage } from './useLocalStorage'
import { useLocation, useNavigate } from 'react-router-dom'
import { createContext, useCallback, useContext, useMemo } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser, removeUser] = useLocalStorage('user', null)
  const navigate = useNavigate()
  const location = useLocation()

  const login = useCallback(async (email) => {
    setUser({ email })

    navigate('/' + location.search)
  }, [setUser, navigate, location])

  const logout = useCallback(async () => {
    removeUser()

    navigate('/login' + location.search, { replace: true })
  }, [removeUser, navigate, location])

  const value = useMemo(() => ({
    user,
    login,
    logout,
  }), [user, login, logout])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
