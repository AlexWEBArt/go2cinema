import { Navigate, Route, Routes } from "react-router";
import { useContext, useEffect, useState } from "react";
import HomePage from "../pages/HomePage/HomePage";
import HallPage from "../pages/HallPage/HallPage";
import PaymentPage from "../pages/PaymentPage/PaymentPage";
import TicketPage from "../pages/TicketPage/TicketPage";
import AdminPage from "../pages/AdminPage/AdminPage";
import P404 from "../pages/P404/P404";
import Main from "./Main/Main";
import Logo from "./Logo/Logo";

import './style.css'
import Modal from "./UI Kit/Modal/Modal";
import { AppDataContext } from "../providers/AppDataProvider/AppDataProvider";


export default function Go2cinema() {
  document.body.classList.remove('background-admin');
  document.body.classList.add('background-client');
  const [isAdminPage, setIsAdminPage] = useState(false);
  const [admin, setAdmin] = useState(false)
  // const [data, setData] = useState(null);
  const { data, setData, requestData, setRequestData } = useContext(AppDataContext)
  // console.log('reload')
  const [callModal, setCallModal] = useState({
    title: '',
    form: ''
  })

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:7070/getlist');
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
  }, [requestData])

  // useEffect(() => {
  //   // В момент изменения авторизации, добавьте или удалите класс для body.
  //   if (isAdminPage) {
  //     document.body.classList.add('background-admin');
  //   } else {
  //     document.body.classList.add('background-client');
  //   }
  //   setIsAdminPage(false)
  // }, [isAdminPage]);


  return (
    <>
      <Modal title={callModal.title} form={callModal.form} />
      <div className="App">
        <Logo isAdminPage={isAdminPage} />
        {/* <Main> */}
        <Routes>
          <Route path='/' element={<HomePage data={data} />}></Route>
          <Route path='/hall' element={<HallPage data={data} />}></Route>
          <Route path='/payment' element={<PaymentPage data={data} />}></Route>
          <Route path='/ticket' element={<TicketPage data={data} />}></Route>

          <Route path='/admin' element={<AdminPage data={data} admin={admin} setAdmin={setAdmin} setIsAdminPage={setIsAdminPage} setCallModal={setCallModal} />}></Route>
          <Route path='/admin/login' element={<AdminPage admin={admin} setAdmin={setAdmin} setIsAdminPage={setIsAdminPage} />}></Route>

          <Route path='/*' element={<P404 />}></Route>
        </Routes>

        {/* </Main> */}
      </div>
    </>
  )
}