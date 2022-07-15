import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import FullLoading from './components/FullLoading'
import NavigateToLogin from './components/NavigateToLogin'
import AuthLayout from './layouts/AuthLayout'
import PanelLayout from './layouts/PanelLayout'
import { ROLES } from './lib/auth'
import LoginPage from './pages/LoginPage'
import AdminPanelDashboardPage from './pages/panel/AdminPanelDashboardPage'
import { useUiStore } from './stores/ui-store'


function App() {
  const location = useLocation()
  const isFullLoading = useUiStore(state => state.isFullLoading)
  const toggleFullLoading = useUiStore(state => state.toggleFullLoading)

  useEffect(() => {
    if (isFullLoading) {
      const timeout = setTimeout(() => {
        toggleFullLoading()
      }, 100);

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [location.pathname])

  return (
    <>
      <FullLoading />
      <Routes>

        <Route path="/">
          <Route index element={<NavigateToLogin />} />

          <Route path="auth" element={<AuthLayout />}>
            <Route index element={<NavigateToLogin />} />

            <Route path="login" element={<LoginPage />} />
          </Route>

          <Route path="panel" element={<PanelLayout />} >
            <Route path={ROLES.ADMIN}>
              <Route path="dashboard" element={<AdminPanelDashboardPage />} />
            </Route>


          </Route>

        </Route>


      </Routes>

    </>
  )
}

export default App