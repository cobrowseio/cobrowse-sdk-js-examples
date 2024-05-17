import { useAuth } from '../hooks/useAuth'
import { useEffect } from 'react'
import { useLocation, useNavigate, useRouteLoaderData } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const { isDemoMode } = useRouteLoaderData('root')

  useEffect(() => {
    if (!user && !isDemoMode) {
      navigate('/login' + location.search)
    }
  }, [navigate, user, location, isDemoMode])

  return children
}

export default ProtectedRoute
