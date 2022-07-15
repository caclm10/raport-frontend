import createVanilla from 'zustand/vanilla'
import create from 'zustand'

export const uiStore = createVanilla((set, get) => ({
    isFullLoading: false,
    loadingText: 'Loading...',
    toggleFullLoading: (text) => set((state) => ({ isFullLoading: !state.isFullLoading, loadingText: text || 'Loading...' }))
}))

export const useUiStore = create(uiStore)

export const toggleFullLoading = (text) => {
    uiStore.setState(state => ({ isFullLoading: !state.isFullLoading, loadingText: text || 'Loading...' }))
}