import { HiOutlineViewGrid, HiOutlineUsers } from "react-icons/hi"
import { ROLES } from "./auth"

export const loginPath = "/auth/login"

export const authPageData = {
    "/auth/login": {
        title: "Login"
    }
}

export const panelSidebarMenus = {
    [ROLES.ADMIN]: [
        {
            text: 'Dashboard',
            to: '/panel/admin/dashboard',
            icon: HiOutlineViewGrid,
        },
        {
            text: 'Siswa',
            to: '/panel/admin/siswa',
            icon: HiOutlineUsers,
        }
    ]
}

export const panelPageData = {
    "/panel/admin/dashboard": {
        title: 'Dashboard'
    },
    "/panel/admin/siswa": {
        title: "Daftar Siswa"
    },
    "default": {
        title: ''
    }
}