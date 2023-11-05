import { Navigate, Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import HomePage from "../pages/HomePage/HomePage";
import HallPage from "../pages/HallPage/HallPage";
import PaymentPage from "../pages/PaymentPage/PaymentPage";
import TicketPage from "../pages/TicketPage/TicketPage";
import AdminPage from "../pages/AdminPage/AdminPage";
import P404 from "../pages/P404/P404";
import Main from "./Main/Main";
import Logo from "./Logo/Logo";

import './style.css'


export default function Go2cinema() {
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('http://localhost:7070/getlist');
          if (response.ok) {
            const result = await response.json();
            setData(result);
          } else {
            console.error('Failed to fetch data');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }
  
      fetchData();
    }, [])

    useEffect(() => {
      // В момент изменения авторизации, добавьте или удалите класс для body.
      if (isAdminLoggedIn) {
        document.body.classList.add('background-admin');
      } else {
        document.body.classList.add('background-client');
      }
    }, [isAdminLoggedIn]);

    
    return (
        <div className="App">
            <Logo admin={isAdminLoggedIn}/>
            {/* <Main> */}
                <Routes>
                    <Route path='/' element={<HomePage data={data}/>}></Route>
                    <Route path='/hall' element={<HallPage data={data}/>}></Route>
                    <Route path='/payment' element={<PaymentPage data={data}/>}></Route>
                    <Route path='/ticket' element={<TicketPage data={data}/>}></Route>
                                                 {/* {!user ? <Navigate to="/admin/login"/> : <AdminPage />} */}
                    <Route path='/admin' element={<AdminPage admin={isAdminLoggedIn}/>}></Route>
                    <Route path='/admin/login' element={<AdminPage />}></Route>

                    <Route path='/*' element={<P404 />}></Route>
                </Routes>
            {/* </Main> */}
        </div>
    )
}