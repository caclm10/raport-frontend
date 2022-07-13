import { useContext } from "react"
import authContext from "../context/auth/auth-context"

const useAuth = () => {
    return useContext(authContext)
}

export default useAuth