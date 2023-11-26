import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { AuthContext } from "../../providers/AuthProvaider/AuthProvider";

export default function Auth() {
    const navigate = useNavigate()
    const [inputChange, setInputChange] = useState({
        userName: '',
        password: ''
    });

    const { admin, token, setToken, setAdmin } = useContext(AuthContext)

    useEffect(() => {
        if (token) {
            console.log(token)
            setAdmin(true)
            return navigate("/admin");
        }
        setAdmin(false)
    }, [admin, token, navigate]);

    const saveTokenToLocalStorage = (token) => {
        localStorage.setItem('Go2CinemaToken', token);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        name === 'mail' && setInputChange(prevChange => ({ ...prevChange, userName: value }));
        name === 'pwd' && setInputChange(prevChange => ({ ...prevChange, password: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = { username: inputChange.userName, password: inputChange.password };

        try {
            const response = await fetch('http://localhost:7070/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (response.ok) {
                const result = await response.json();
                setToken(result.token);
                setAdmin(true);
                saveTokenToLocalStorage(result.token);
            } else {
                setAdmin(false);
            }
        } catch (error) {
            console.error("Error during login:", error);
            setAdmin(false);
        }
    };

    return (
        <section className="login">
            <header className="login__header">
                <h2 className="login__title">Авторизация</h2>
            </header>
            <div className="login__wrapper">
                <form className="login__form" onSubmit={handleSubmit}>
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