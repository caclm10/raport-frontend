import { useReducer } from 'react'
import authContext from './auth-context.js'

const initialValues = {
    user: null,
    isLoggedIn: false,
    token: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.user,
                token: action.token,
                isLoggedIn: true
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                token: '',
                isLoggedIn: false
            }
        default:
            return state
    }
}

const AuthProvider = ({ children }) => {
    const [auth, dispatch] = useReducer(reducer, initialValues)

    const login = (user, token) => {
        dispatch({
            type: 'LOGIN',
            user, token
        })
    }

    const logout = () => {
        dispatch({ type: 'LOGOUT' })
    }

    return (
        <authContext.Provider value={{
            ...auth,
            login,
            logout
        }}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider