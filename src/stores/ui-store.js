import createVanilla from 'zustand/vanilla'
import create from 'zustand'

export const uiStore = createVanilla((set, get) => ({
    isFullLoading: false,
    loadingText: 'Loading...',
    isOpenDeleteConfirm: false,
    onConfirmDelete: (callback = () => { }, close = true) => {
        callback()
        if (close) set({ isOpenDeleteConfirm: false })
    },
    toggleConfirmDelete: (nextValue = null) => set(state => ({ isOpenDeleteConfirm: typeof nextValue === 'boolean' ? nextValue : !state.isOpenDeleteConfirm })),
    toggleFullLoading: (text) => set((state) => ({ isFullLoading: !state.isFullLoading, loadingText: text || 'Loading...' }))
}))

export const useUiStore = create(uiStore)

export const toggleFullLoading = (text = '') => {
    useUiStore.getState().toggleFullLoading(text)
}

export const toggleConfirmDelete = (value = null) => {
    useUiStore.getState().toggleConfirmDelete(value)
}

