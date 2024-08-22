import React, { useEffect } from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './hooks/useAuth'
import { useCobrowse } from './hooks/useCobrowse'
import Dashboard, { loader as dashboardLoader } from './routes/Dashboard'
import DashboardLayout, { loader as dashboardLayoutLoader } from './routes/layouts/DashboardLayout'
import Login from './routes/Login'
import Present from './routes/Present'
import Profile from './routes/Profile'
import Root, { loader as rootLoader } from './routes/Root'
import Transaction, { loader as transactionLoader } from './routes/Transaction'
import { getQueryParam } from './utils/getQueryParam'

const router = createBrowserRouter([
  {
    path: '/',
    loader: rootLoader,
    id: 'root',
    element: (
      <AuthProvider>
        <Root />
      </AuthProvider>
    ),
    children: [
      {
        element: (
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        ),
        loader: dashboardLayoutLoader,
        children: [
          {
            index: true,
            element: (
              <Dashboard />
            ),
            loader: dashboardLoader
          },
          {
            path: 'transactions/:id',
            element: (
              <Transaction />
            ),
            loader: transactionLoader
          }
        ]
      },
      {
        element: (
          <ProtectedRoute>
            <Outlet />
          </ProtectedRoute>
        ),
        children: [
          {
            path: 'profile',
            element: (
              <Profile />
            )
          },
          {
            path: 'present',
            element: (
              <Present />
            )
          }
        ]
      }
    ]
  },
  {
    path: 'login',
    element: (
      <AuthProvider>
        <Login />
      </AuthProvider>
    )
  }
], {
  basename: '/web-example/demo'
})

const App = () => {
  const { start } = useCobrowse()

  useEffect(() => {
    start({
      api: getQueryParam('api'),
      license: getQueryParam('license'),
      redactedViews: getQueryParam('redacted_views'),
      capabilities: getQueryParam('capabilities'),
      customData: getQueryParam('custom_data'),
      customSessionControls: getQueryParam('custom_session_controls'),
      allowHeadless: getQueryParam('allow_headless'),
      sessionCode: getQueryParam('session_code'),
      registration: getQueryParam('registration')
    })
  }, [start])

  return (
    <RouterProvider router={router} />
  )
}

export default App
