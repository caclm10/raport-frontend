import toast from 'react-hot-toast'
import create from 'zustand'
import ajax from '../lib/ajax'
import { setErrorForm } from '../lib/form'

const initialState = {
    students: [],
    studentsPaginator: null,
    shouldFetchStudents: true,
    studentsFetchURL: '/api/siswa',
    isFetching: false,
    isSubmitting: false,
}

export const useDataStore = create((set, get) => ({
    ...initialState,
    setStudentsFetchURL: (url = '') => set({ studentsFetchURL: url, shouldFetchStudents: true }),
    fetchStudents: async () => {
        set({ isFetching: true })
        const result = await ajax(get().studentsFetchURL)
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

    updateStudent: async (data, id, setError, setFocus) => {
        set({ isSubmitting: true })
        try {
            await ajax(`/api/siswa/${id}`, 'PATCH', data)
            toast.success('Berhasil memperbarui data siswa', {
                duration: 3000,
                position: 'bottom-center'
            })
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