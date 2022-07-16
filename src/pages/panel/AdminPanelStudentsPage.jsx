import { HStack, IconButton } from "@chakra-ui/react"
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import AddButton from "../../components/AddButton"
import PanelActions from "../../components/PanelActions"
import PanelCard from "../../components/PanelCard"
import PanelTable from "../../components/PanelTable"

const students = [
    {
        user: {
            nama: 'Ghea Indrawari',
            peran: 'siswa',
            id: '1'
        },
        nis: '2423',
        nisn: '4025345341',
        id: '1',
    }
]

const columns = [
    {
        id: 'nis_nisn',
        accessorFn: row => `${row.nis}/${row.nisn}`,
        header: () => "NIS/NISN"
    },
    {
        id: 'nama',
        accessorFn: row => row.user.nama,
        header: () => "Nama"
    },
    {
        id: 'aksi',
        cell: ({ row }) => (
            <HStack spacing={3} justify="flex-end">
                <IconButton
                    as={Link}
                    to={`/panel/admin/siswa/${row.original.id}/edit`}
                    icon={<HiOutlinePencil />}
                    size="sm"
                    rounded="full"
                    colorScheme="purple"
                    variant="ghost"
                />
                <IconButton
                    icon={<HiOutlineTrash />}
                    size="sm"
                    rounded="full"
                    colorScheme="red"
                    variant="ghost"
                />
            </HStack>
        ),
        header: () => ""
    }
]

const AdminPanelStudentsPage = params => {
    return (
        <>
            <PanelCard>
                <PanelActions>
                    <AddButton text="Siswa" />
                </PanelActions>

                <PanelTable
                    data={students}
                    columns={columns}
                />
            </PanelCard>
        </>
    )
}

export default AdminPanelStudentsPage