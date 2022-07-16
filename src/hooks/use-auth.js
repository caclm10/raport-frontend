import { useCallback, useContext } from "react"
import { useNavigate } from 'react-router-dom'
import authContext from "../context/auth/auth-context"
import ajax from "../lib/ajax"
import { useDataStore } from "../stores/data-store"
import { toggleFullLoading } from "../stores/ui-store"

const useAuth = () => {
    return useContext(authContext)
}

export const useLogout = () => {
    const navigate = useNavigate()
    const auth = useAuth()
    const resetDataStore = useDataStore(state => state.reset)

    const logout = useCallback(async () => {
        toggleFullLoading('Logging out...')
        await ajax('/api/logout', 'POST')
        auth.logout()
        resetDataStore()
        navigate('/auth/login')
    }, [])

    return logout
}

export default useAuth