import { useNavigate } from 'react-router';
// import './logo.css'

export default function Logo({ isAdminPage, onLogout }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('Go2CinemaToken')
        onLogout()
        navigate('/admin/login')
    };


    return (
        <header className={"page-header"} >
            <div>
                <h1 className="page-header__title">Идём<span>в</span>кино</h1>
                {isAdminPage && <span className="page-header__subtitle">Администраторррская</span>}
            </div>
            {isAdminPage && <button className='btn-logout' onClick={handleLogout}>Выйти</button>}
        </header>
    )
}