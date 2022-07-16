import { HStack } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const PanelSidebarLink = ({
    to = '/',
    text = '',
    action = false,
    icon = null,
    onClick = () => { }
}) => {
    return (
        <HStack
            as={action ? 'button' : NavLink}
            {...(action ? {} : { to: to })}
            px={3.5}
            py={2}
            rounded="lg"
            _hover={{
                bgColor: 'gray.200'
            }}
            _active={{
                bgColor: 'gray.300'
            }}
            _activeLink={{
                bgColor: 'purple.500',
                color: 'white',
                _hover: {
                    bgColor: 'purple.500',
                },
                _active: {
                    bgColor: 'purple.500',
                },
            }}
            onClick={onClick}
        >
            <span>{icon}</span>
            <span>{text}</span>
        </HStack>
    )
}

export default PanelSidebarLink