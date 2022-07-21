import { HStack, IconButton } from "@chakra-ui/react"
import { useEffect, useState } from "react"
// import toast from "react-hot-toast"
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { useToggle } from 'react-use'
import AddButton from "../../components/AddButton"
import DeleteConfirm from "../../components/DeleteConfirm"
import Pagination from "../../components/Pagination"
import PanelActions from "../../components/PanelActions"
import PanelCard from "../../components/PanelCard"
import PanelTable from "../../components/PanelTable"
import ajax from "../../lib/ajax"
import { toast } from "../../lib/toast"
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
        cell: ({ row, table, }) => (
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
                    onClick={() => table.options.meta?.handleDelete(row.original.id)}
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
    const setStudentsFetchURL = useDataStore(state => state.setStudentsFetchURL)
    const studentsSearch = useDataStore(state => state.studentsSearch)
    const setStudentsSearch = useDataStore(state => state.setStudentsSearch)
    const isFetching = useDataStore(state => state.isFetching)
    const [isDeleteConfirmationOpen, toggleDeleteConfirmation] = useToggle(false)
    const [isDeletting, toggleDeleting] = useToggle()
    const [studentId, setStudentId] = useState()

    const showDeleteConfirmationHandler = id => {
        toggleDeleteConfirmation(true)
        setStudentId(id)
    }

    const deleteStudentHandler = async () => {
        toggleDeleting(true)
        await ajax(`/api/siswa/${studentId}`, 'DELETE')
        toggleDeleting(false)
        setStudentId(null)
        toggleDeleteConfirmation(false)
        toast.success({ title: 'Berhasil menghapus siswa.' })
        fetchStudents()
    }

    useEffect(() => {
        if (shouldFetchStudents) fetchStudents()
    }, [shouldFetchStudents])

    return (
        <>
            <DeleteConfirm
                onClose={() => toggleDeleteConfirmation(false)}
                isOpen={isDeleteConfirmationOpen}
                onConfirm={deleteStudentHandler}
                isLoading={isDeletting}
            />
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
                    onClickDelete={showDeleteConfirmationHandler}
                    paginator={studentsPaginator}
                    onUrlChange={setStudentsFetchURL}
                    search={studentsSearch}
                    onSearch={setStudentsSearch}
                />

            </PanelCard>
        </>
    )
}

export default AdminPanelStudentsPage