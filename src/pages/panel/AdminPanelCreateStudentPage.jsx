import { nanoid } from 'nanoid'
import BackButton from "../../components/BackButton"
import PanelActions from "../../components/PanelActions"
import PanelCard from "../../components/PanelCard"
import SaveButton from "../../components/SaveButton"
import StudentForm from '../../components/student/StudentForm'
import { useDataStore } from '../../stores/data-store'

const formId = nanoid()

const AdminPanelCreateStudentPage = () => {
    const isSubmitting = useDataStore(state => state.isSubmitting)

    return (
        <>
            <PanelCard>
                <PanelActions>
                    <BackButton to="/panel/admin/siswa" />

                    <SaveButton form={formId} isLoading={isSubmitting} />
                </PanelActions>

                <StudentForm
                    type="create"
                    formId={formId}
                />
            </PanelCard>
        </>
    )
}

export default AdminPanelCreateStudentPage