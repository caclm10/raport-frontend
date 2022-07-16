import create from 'zustand'
import ajax from '../lib/ajax'

const initialState = {
    students: [],
    studentsPaginator: null,
    shouldFetchStudents: true,
    isFetching: false,
}

export const useDataStore = create((set, get) => ({
    ...initialState,
    fetchStudents: async (url = '/api/siswa') => {
        set({ isFetching: true })
        const result = await ajax(url)
        const { data, ...paginator } = result.data


        set({ students: data, studentsPaginator: paginator, isFetching: false, shouldFetchStudents: false })
    },
    reset: () => {
        set(initialState)
    }
}))