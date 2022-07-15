import { Button } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'
import useAuth, { useLogout } from "../../hooks/use-auth"
import ajax from "../../lib/ajax"

const AdminPanelDashboardPage = ({

}) => {
    const logout = useLogout()
    return (
        <div>
            AdminPanelDashboardPage

            <Button onClick={logout}>
                Logout
            </Button>
        </div>
    )
}

export default AdminPanelDashboardPage