import { useReducer } from 'react'
import authContext from './auth-context.js'

const userStorage = localStorage.getItem('user')

const initialValues = {
    user: userStorage && JSON.parse(userStorage),
    isLoggedIn: !!userStorage,
    token: localStorage.getItem('token')
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
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)
        dispatch({
            type: 'LOGIN',
            user, token
        })
    }

    const logout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
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