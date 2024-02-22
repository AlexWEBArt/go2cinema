import { Route, Routes } from "react-router";
import { useContext, useEffect } from "react";
import HomePage from "../pages/HomePage/HomePage";
import HallPage from "../pages/HallPage/HallPage";
import PaymentPage from "../pages/PaymentPage/PaymentPage";
import TicketPage from "../pages/TicketPage/TicketPage";
import AdminPage from "../pages/AdminPage/AdminPage";
import P404 from "../pages/P404/P404";
import Logo from "./Logo/Logo";
// import './style.css'
import './styles.scss'

import { AppDataContext } from "../providers/AppDataProvider/AppDataProvider";
import { AuthContext } from "../providers/AuthProvaider/AuthProvider";


export default function Go2cinema() {
  // document.body.classList.remove('background-admin');
  // document.body.classList.add('background-client');

  const { data, setData, requestData, setRequestData } = useContext(AppDataContext)
  const { admin, setToken, setAdmin } = useContext(AuthContext)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://go2cinema-backend.onrender.com/getlist');
        if (response.ok) {
          const result = await response.json();
          setData(result);
          setRequestData(false)
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchData();
  }, [requestData, setData, setRequestData])

  const handleLogout = () => {
    setToken('');
    setAdmin(false);
    localStorage.removeItem('Go2CinemaToken');
  };

  return (
    <>
      <div className="App">
        <Logo onLogout={handleLogout} isAdminPage={admin} />

        <Routes>
          <Route path='/go2cinema' element={<HomePage data={data}/>}></Route>
          <Route path='/go2cinema/hall' element={<HallPage data={data} />}></Route>
          <Route path='/go2cinema/payment' element={<PaymentPage data={data} />}></Route>
          <Route path='/go2cinema/ticket' element={<TicketPage data={data} />}></Route>

          <Route path='/go2cinema/admin' element={<AdminPage data={data} />}></Route>
          <Route path='/go2cinema/admin/login' element={<AdminPage />}></Route>

          <Route path='/go2cinema/*' element={<P404 />}></Route>
        </Routes>
      </div>
    </>
  )
}