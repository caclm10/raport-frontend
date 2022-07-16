import { nanoid } from 'nanoid'
import { useForm } from 'react-hook-form'
import BackButton from "../../components/BackButton"
import FormInput from "../../components/FormInput"
import PanelActions from "../../components/PanelActions"
import PanelCard from "../../components/PanelCard"
import SaveButton from "../../components/SaveButton"
import { useDataStore } from '../../stores/data-store'

const formId = nanoid()

const AdminPanelCreateStudentPage = () => {
    const { formState: { errors }, handleSubmit, register, reset, setError, setFocus } = useForm({
        defaultValues: {
            nis: '',
            nisn: '',
            nama: ''
        }
    })
    const addStudent = useDataStore(state => state.addStudent)
    const fetchStudents = useDataStore(state => state.fetchStudents)
    const isSubmitting = useDataStore(state => state.isSubmitting)

    const handleSave = async data => {
        await addStudent(data, setError, setFocus, reset)
        await fetchStudents()
    }

    return (
        <>
            <PanelCard>
                <PanelActions>
                    <BackButton to="/panel/admin/siswa" />

                    <SaveButton form={formId} isLoading={isSubmitting} />
                </PanelActions>

                <form action="#" id={formId} onSubmit={handleSubmit(handleSave)}>

                    <FormInput
                        name="nis"
                        label="NIS"
                        register={register}
                        error={errors.nis?.message}
                        autoFocus
                    />
                    <FormInput
                        name="nisn"
                        label="NISN"
                        register={register}
                        error={errors.nisn?.message}
                    />
                    <FormInput
                        name="nama"
                        label="Nama"
                        register={register}
                        error={errors.nama?.message}
                    />

                </form>
            </PanelCard>
        </>
    )
}

export default AdminPanelCreateStudentPage