import { useMemo } from "react"
import { useForm } from "react-hook-form"
import { useDataStore } from "../../stores/data-store"
import FormInput from "../FormInput"

const StudentForm = ({
    type,
    data = {
        nis: '',
        nisn: '',
        user: { nama: '' }
    },
    formId = ''
}) => {
    if (!type) return <></>

    const { formState: { errors }, handleSubmit, register, reset, setError, setFocus } = useForm({
        defaultValues: useMemo(() => ({
            nis: data.nis,
            nisn: data.nisn,
            nama: data.user.nama
        }), [data.nis, data.nisn, data.user.nama])
    })

    const addStudent = useDataStore(state => state.addStudent)
    const updateStudent = useDataStore(state => state.updateStudent)
    const fetchStudents = useDataStore(state => state.fetchStudents)

    const handleSave = async formData => {
        if (type === 'create') await addStudent(formData, setError, setFocus, reset)
        else if (type === 'edit') await updateStudent(formData, data.id, setError, setFocus)

        await fetchStudents()
    }

    return (
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
    )
}

export default StudentForm