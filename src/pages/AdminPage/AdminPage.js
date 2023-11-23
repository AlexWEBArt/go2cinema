import AdminPanel from "../../widgets/AdminPanel/AdminPanel";
import Auth from "../../widgets/Auth/Auth";


export default function AdminPage({admin, data, setIsAdminPage, setAdmin, setCallModal}) {
    document.body.classList.remove('background-client');
    document.body.classList.add('background-admin');

    if (!admin) {
        return (
            <Auth setAdmin={setAdmin}/>
        )
    }

    if (!data) return


    return (
        <AdminPanel data={data} setCallModal={setCallModal}/>
    )
}