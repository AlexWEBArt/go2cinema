// import { useState } from "react"
import './logo.css'

export default function Logo({admin}) {

    // useEffect(() => {
    //     // В момент изменения авторизации, добавьте или удалите класс для body.
    //     if (admin) {
    //       document.body.classList.add('background-admin');
    //     } else {
    //       document.body.classList.add('background-client');
    //     }
    //   }, [admin]);

    return (
        <header className={"page-header"} >
            <h1 className="page-header__title">Идём<span>в</span>кино</h1>
            {admin && <span className="page-header__subtitle">Администраторррская</span>}
        </header>
    )
}