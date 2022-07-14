import { Button } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'
import useAuth from "../../hooks/use-auth"
import ajax from "../../lib/ajax"

const AdminPanelDashboardPage = ({

}) => {
    const navigate = useNavigate()
    const auth = useAuth()

    const handleLogout = async () => {
        await ajax('/api/logout', 'POST')
        auth.logout()
        navigate('/auth/login')
    }
    return (
        <div>
            AdminPanelDashboardPage

            <Button onClick={handleLogout}>
                Logout
            </Button>
        </div>
    )
}

export default AdminPanelDashboardPage