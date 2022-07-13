import { createContext } from 'react'

const authContext = createContext({
    user: {
        nama: '',
        id: '',
        peran: '',
        siswa: {
            id: '',
            nis: '',
            nisn: ''
        },
        guru: {
            id: '',
            nip: '',
        },
        admin: {
            id: '',
            kode: ''
        }
    },

    isLoggedIn: false,

    token: '',

    login: (user, token) => { },

    logout: () => { }
})


export default authContext