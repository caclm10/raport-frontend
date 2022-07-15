import { Avatar, Box, Flex, Heading, IconButton, VStack } from '@chakra-ui/react'
import { Outlet, useLocation } from 'react-router-dom'
import { HiOutlineMenu } from 'react-icons/hi'
import { useToggle } from 'react-use'
import PanelSidebarLink from '../components/PanelSidebarLink'
import { useMemo } from 'react'
import { getPanelPageData } from '../lib/page'
import { useLogout } from '../hooks/use-auth'

const PanelLayout = () => {
    const location = useLocation()
    const logout = useLogout()
    const [isSidebarActive, toggleSidebar] = useToggle(true)

    const pageData = useMemo(() => getPanelPageData(location.pathname), [location.pathname])

    return (
        <Box
            minH="100vh"
            bgColor="gray.100"
        >
            <Box
                as="aside"
                position="fixed"
                insetY={0}
                left={0}
                width={isSidebarActive ? 240 : 0}
                border="1px"
                borderColor="gray.200"
                bgColor="white"
                whiteSpace="nowrap"
                overflow="hidden"
                transition="width 0.3s"
                zIndex={20}
            >
                <Box p={5}>
                    <Heading as="h3" size="lg">Raport</Heading>
                </Box>

                <VStack
                    as="nav"
                    spacing={1.5}
                    align="stretch"
                    p={5}
                >
                    <PanelSidebarLink to="/panel/admin/dashboard" text="Dashboard" />
                    <PanelSidebarLink to="/panel/admin/siswa" text="Siswa" />
                    <PanelSidebarLink action text="Logout" onClick={logout} />
                </VStack>
            </Box>

            <Box
                pl={isSidebarActive ? 240 : 0}
                py={12}
                transition="padding 0.3s"
            >
                <Box
                    as="main"
                    p={5}
                >
                    <Flex
                        as="header"
                        p={5}
                        bgColor="white"
                        rounded="xl"
                        justify="space-between"
                        mb={5}
                    >
                        <IconButton
                            size="sm"
                            icon={<HiOutlineMenu />}
                            colorScheme="purple"
                            variant="ghost"
                            rounded="full"
                            onClick={toggleSidebar}
                        />

                        <Avatar
                            size="sm"
                        />
                    </Flex>

                    <Heading as="h1" size="xl" mb={5}>{pageData.title}</Heading>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    )
}

export default PanelLayout