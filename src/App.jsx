import { Routes, Route, Navigate } from 'react-router-dom'
import NavigateToLogin from './components/NavigateToLogin'
import AuthLayout from './layouts/AuthLayout'
import PanelLayout from './layouts/PanelLayout'
import { ROLES } from './lib/auth'
import LoginPage from './pages/LoginPage'
import AdminPanelDashboardPage from './pages/panel/AdminPanelDashboardPage'


function App() {
  return (
    <>
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