import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button
} from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
import { useUpdate } from 'react-use'

const DeleteConfirm = ({
    isOpen = false,
    isLoading = false,
    instanceName = '',
    onConfirm = () => { },
    onClose = () => { },
}) => {
    const cancelRef = useRef()
    const update = useUpdate()

    // Fix Open Issue
    useEffect(() => {
        const timeout = setTimeout(() => {
            update()
        }, 10)

        return () => {
            clearTimeout(timeout)
        }
    }, [isOpen])

    return (
        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
        >
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold' textTransform="capitalize">
                        Delete {instanceName}
                    </AlertDialogHeader>

                    <AlertDialogBody>
                        Are you sure? You can't undo this action afterwards.
                    </AlertDialogBody>

                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='red' onClick={onConfirm} ml={3} isLoading={isLoading}>
                            Delete
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    )
}

export default DeleteConfirm