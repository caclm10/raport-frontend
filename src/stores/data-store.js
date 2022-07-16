import toast from 'react-hot-toast'
import create from 'zustand'
import ajax from '../lib/ajax'
import { getSortedIndex } from '../lib/arr'
import { setErrorForm } from '../lib/form'

const initialState = {
    students: [],
    studentsPaginator: null,
    shouldFetchStudents: true,
    isFetching: false,
    isSubmitting: false,
}

export const useDataStore = create((set, get) => ({
    ...initialState,
    fetchStudents: async (url = '/api/siswa') => {
        set({ isFetching: true })
        const result = await ajax(url)
        const { data, ...paginator } = result.data


        set({
            students: data,
            studentsPaginator: paginator,
            isFetching: false,
            shouldFetchStudents: false
        })
    },
    addStudent: async (data, setError, setFocus, reset) => {
        set({ isSubmitting: true })
        try {
            await ajax('/api/siswa', 'POST', data)
            toast.success('Berhasil menambah siswa', {
                duration: 3000,
                position: 'bottom-center'
            })
            reset()
            setFocus('nis')
        } catch (error) {
            if (error.code === 422) setErrorForm(setError, error.data, setFocus)
        }
        set({ isSubmitting: false })
    },

    reset: () => {
        set(initialState)
    }
}))