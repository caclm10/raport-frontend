import isEmpty from 'lodash.isempty'
import { nanoid } from 'nanoid'
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useToggle } from 'react-use'
import BackButton from "../../components/BackButton"
import PanelActions from "../../components/PanelActions"
import PanelCard, { panelCardVariables } from "../../components/PanelCard"
import SaveButton from "../../components/SaveButton"
import StudentForm from '../../components/student/StudentForm'
import ajax from '../../lib/ajax'
import { useDataStore } from '../../stores/data-store'

const formId = nanoid()

const AdminPanelEditStudentPage = () => {
    const { studentId } = useParams()
    const isSubmitting = useDataStore(state => state.isSubmitting)
    const [isLoading, toggleLoading] = useToggle(false)
    const [student, setStudent] = useState()

    const fetchStudent = useCallback(async () => {
        toggleLoading(true)
        const result = await ajax(`/api/siswa/${studentId}`)

        if (!isEmpty(result.data)) {
            const { user, ...data } = result.data
            setStudent({
                ...data,
                nama: user.nama
            })
        }
        toggleLoading(false)
    }, [studentId])

    useEffect(() => {
        fetchStudent()
    }, [fetchStudent])

    return (
        <>
            <PanelCard maxW={panelCardVariables.maxW.form} mx="auto">
                <PanelActions>
                    <BackButton to="/panel/admin/siswa" />

                    <SaveButton form={formId} isLoading={isSubmitting || isLoading} />
                </PanelActions>

                <StudentForm
                    type="edit"
                    formId={formId}
                    data={student}
                    isLoading={isLoading}
                />
            </PanelCard>
        </>
    )
}

export default AdminPanelEditStudentPage