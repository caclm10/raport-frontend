import { Routes, Route, Navigate } from 'react-router-dom'
import NavigateToLogin from './components/NavigateToLogin'
import AuthLayout from './layouts/AuthLayout'
import LoginPage from './pages/LoginPage'

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


        </Route>


      </Routes>

    </>
  )
}

export default App