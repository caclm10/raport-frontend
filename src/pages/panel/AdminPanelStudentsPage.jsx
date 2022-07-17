import { HStack, IconButton } from "@chakra-ui/react"
import { useEffect } from "react"
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { useToggle } from "react-use"
import AddButton from "../../components/AddButton"
import Pagination from "../../components/Pagination"
import PanelActions from "../../components/PanelActions"
import PanelCard from "../../components/PanelCard"
import PanelTable from "../../components/PanelTable"
import { useDataStore } from "../../stores/data-store"

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
    const students = useDataStore(state => state.students)
    const studentsPaginator = useDataStore(state => state.studentsPaginator)
    const fetchStudents = useDataStore(state => state.fetchStudents)
    const shouldFetchStudents = useDataStore(state => state.shouldFetchStudents)
    const studentsFetchURL = useDataStore(state => state.studentsFetchURL)
    const isFetching = useDataStore(state => state.isFetching)

    useEffect(() => {
        if (shouldFetchStudents || studentsFetchURL) fetchStudents()
    }, [shouldFetchStudents, studentsFetchURL])

    return (
        <>
            <PanelCard>
                <PanelActions>
                    <AddButton
                        text="Siswa"
                        to="/panel/admin/siswa/create"
                    />
                </PanelActions>

                <PanelTable
                    data={students}
                    columns={columns}
                    isLoading={isFetching}
                />

                <Pagination
                    paginator={studentsPaginator}
                />
            </PanelCard>
        </>
    )
}

export default AdminPanelStudentsPage