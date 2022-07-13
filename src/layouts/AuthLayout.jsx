import { Box, Heading, VStack } from '@chakra-ui/react'
import { useMemo } from 'react'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { getAuthPageData } from '../lib/page'

const AuthLayout = ({

}) => {
    const location = useLocation()
    const pageData = useMemo(() => getAuthPageData(location.pathname), [location.pathname])

    return (
        <Box
            minH="100vh"
            bgColor="purple.500"
            py={24}
        >
            <Box
                maxW="550px"
                mx="auto"
                bgColor="white"
                rounded="lg"
                p={5}
            >
                <VStack spacing={5} mb={5}>
                    <Heading as="h1" size="xl" fontWeight="semibold">{pageData.title}</Heading>
                    <Heading as="h2" size="md" fontWeight="medium">Raport</Heading>
                </VStack>


                <Outlet />
            </Box>

        </Box>
    )
}

export default AuthLayout