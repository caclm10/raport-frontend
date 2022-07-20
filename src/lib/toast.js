import { createStandaloneToast } from '@chakra-ui/react'

const { toast: ts } = createStandaloneToast()

const options = {
    duration: 3000,
    isClosable: true,
    position: 'bottom',
}

export const toast = {
    success: ({
        title = '',
        description = ''
    }) => {
        ts({
            title,
            description,
            status: 'success',
            ...options
        })
    },

    error: ({
        title = '',
        description = ''
    }) => {
        ts({
            title,
            description,
            status: 'error',
            ...options
        })
    }
}