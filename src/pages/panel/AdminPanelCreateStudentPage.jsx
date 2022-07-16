import { nanoid } from 'nanoid'
import { useForm } from 'react-hook-form'
import BackButton from "../../components/BackButton"
import FormInput from "../../components/FormInput"
import PanelActions from "../../components/PanelActions"
import PanelCard from "../../components/PanelCard"
import SaveButton from "../../components/SaveButton"

const formId = nanoid()

const AdminPanelCreateStudentPage = () => {
    const { handleSubmit, register } = useForm({
        defaultValues: {
            nis: '',
            nisn: '',
            nama: ''
        }
    })

    const handleSave = data => {
        console.log(data)
    }
    return (
        <>
            <PanelCard>
                <PanelActions>
                    <BackButton to="/panel/admin/siswa" />

                    <SaveButton form={formId} />
                </PanelActions>

                <form action="#" id={formId} onSubmit={handleSubmit(handleSave)}>

                    <FormInput
                        name="nis"
                        label="NIS"
                        register={register}
                    />
                    <FormInput
                        name="nisn"
                        label="NISN"
                        register={register}
                    />
                    <FormInput
                        name="nama"
                        label="Nama"
                        register={register}
                    />

                </form>
            </PanelCard>
        </>
    )
}

export default AdminPanelCreateStudentPage