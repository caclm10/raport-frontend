import AddButton from "../../components/AddButton"
import PanelActions from "../../components/PanelActions"
import PanelCard from "../../components/PanelCard"

const AdminPanelStudentsPage = params => {
    return (
        <>
            <PanelCard>
                <PanelActions>
                    <AddButton text="Siswa" />
                </PanelActions>
            </PanelCard>
        </>
    )
}

export default AdminPanelStudentsPage