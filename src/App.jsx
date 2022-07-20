import { createStandaloneToast } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { Routes, Route, useLocation } from 'react-router-dom'
import FullLoading from './components/FullLoading'
import NavigateToLogin from './components/NavigateToLogin'
import AuthLayout from './layouts/AuthLayout'
import PanelLayout from './layouts/PanelLayout'
import { ROLES } from './lib/auth'
import LoginPage from './pages/LoginPage'
import AdminPanelCreateStudentPage from './pages/panel/AdminPanelCreateStudentPage'
import AdminPanelDashboardPage from './pages/panel/AdminPanelDashboardPage'
import AdminPanelEditStudentPage from './pages/panel/AdminPanelEditStudentPage'
import AdminPanelStudentsPage from './pages/panel/AdminPanelStudentsPage'
import { useUiStore } from './stores/ui-store'

const { ToastContainer } = createStandaloneToast()

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
      <Toaster />
      <ToastContainer />
      <Routes>

        <Route path="/">
          <Route index element={<NavigateToLogin />} />

          <Route path="auth" element={<AuthLayout />}>
            <Route index element={<NavigateToLogin />} />

            <Route path="login" element={<LoginPage />} />
          </Route>

          {/* Panel Routes */}
          <Route path="panel" element={<PanelLayout />} >

            {/* Admin Panel Routes */}
            <Route path={ROLES.ADMIN}>

              <Route path="dashboard" element={<AdminPanelDashboardPage />} />

              <Route path="siswa">
                <Route index element={<AdminPanelStudentsPage />} />
                <Route path="create" element={<AdminPanelCreateStudentPage />} />
                <Route path=":studentId/edit" element={<AdminPanelEditStudentPage />} />
              </Route>

            </Route>
            {/* End of Admin Panel Routes */}

          </Route>
          {/* End of Panel Routes */}

        </Route>


      </Routes>

    </>
  )
}

export default App