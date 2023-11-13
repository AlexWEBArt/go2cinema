import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";


export default function Auth({ admin, setAdmin }) {
    const navigate = useNavigate()
    const [inputChange, setInputChange] = useState({
        userName: '',
        password: ''
    })
    const [requestData, setRequestData] = useState({
        body: '',
        url: ''
    })

    useEffect(() => {
        if (admin) {
            navigate("/admin");
        }
    }, [admin])

    useEffect(() => {
        if (requestData.body.login) {
            async function login() {
                return await fetch(requestData.url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestData.body)
                })
            }
            login().then(result => setAdmin(result.ok))
        }
    }, [requestData])

    const handleChange = (e) => {
        const { name, value } = e.target;

        name === 'mail' && setInputChange(prevChange => ({ ...prevChange, userName: value }));
        name === 'pwd' && setInputChange(prevChange => ({ ...prevChange, password: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = { login: inputChange.userName, password: inputChange.password }

        setRequestData({ body, url: 'http://localhost:7070/login' })
    }

    return (
        <section className="login">
            <header className="login__header">
                <h2 className="login__title">Авторизация</h2>
            </header>
            <div className="login__wrapper">
                <form className="login__form" action="login_submit" method="get" acceptCharset="utf-8" onSubmit={handleSubmit}>
                    <label className="login__label" htmlFor="mail">
                        E-mail
                        <input className="login__input" type="mail" placeholder="example@domain.xyz" name="mail" required onChange={handleChange} />
                    </label>
                    <label className="login__label" htmlFor="pwd">
                        Пароль
                        <input className="login__input" type="password" placeholder="" name="pwd" required onChange={handleChange} />
                    </label>
                    <div className="text-center">
                        <input value="Авторизоваться" type="submit" className="login__button" />
                    </div>
                </form>
            </div>
        </section>
    )
}