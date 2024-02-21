import { useLocation, useNavigate } from "react-router";
import AdminPanel from "../../widgets/AdminPanel/AdminPanel";
import Auth from "../../widgets/Auth/Auth";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvaider/AuthProvider";
import './styles.scss'
// import './image.scss'

export default function AdminPage({data, setCallModal}) {
    document.body.style.backgroundImage = "url('../background-admin.jpg')"
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)"

    const location = useLocation();
    const navigate = useNavigate()

    const { admin, token, setToken } = useContext(AuthContext)

    useEffect(() => {
        if (location.pathname !== '/admin/login') {
            return navigate("/admin/login");
        }
    }, [])

    useEffect(() => {
        if (location.pathname === '/admin/login' && admin) {
            return navigate("/admin");
        }
    }, [admin])

    if (!admin) {
        return (
            <Auth token={token} setToken={setToken} setIsAdminPage={admin}/>
        )
    }

    if (!data) return


    return (
        <AdminPanel data={data} setCallModal={setCallModal}/>
    )
}