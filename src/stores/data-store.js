import create from 'zustand'
import ajax from '../lib/ajax'

export const useDataStore = create((set, get) => ({
    students: [],
    studentsPaginator: null,
    shouldFetchStudents: true,
    isFetching: false,
    fetchStudents: async (url = '/api/siswa') => {
        set({ isFetching: true })
        const result = await ajax(url)
        const { data, ...paginator } = result.data

        set({ students: data, studentsPaginator: paginator, isFetching: false })
    }
}))