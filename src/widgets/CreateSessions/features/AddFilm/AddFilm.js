import { useEffect, useState } from "react";
import Modal from "../../../../root/UI Kit/Modal/Modal";

export default function AddFilm({setCallModal}) {
    const [film, setFilm] = useState({
        film_name: '',
        film_discription: '',
        film_duration: '',
        film_origin: '',
        film_poster: '',
    })

    useEffect(() => {
        console.log(film)
    }, [film])

    const handleSetFilm = (e) => {
        const { name, value } = e.target;
        setFilm(prevConfig => ({...prevConfig, [name]: value}));
    }

    const handleRemoveModal = (e) => {
        e.preventDefault()
        e.target.closest('.popup').classList.remove('active')
    }

    const handleAddFilm = async (e) => {
        e.preventDefault()
        console.log(film)
        // return await fetch('http://localhost:7070/addFilm', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(film)
        // })
        handleRemoveModal(e)
    }

    const handleCallModal = (e) => {
        document.querySelector('.popup').classList.add('active')
        setCallModal({
            title: 'Добавление фильма', form: (
                <form action="add_movie" method="post" acceptCharset="utf-8">
                    <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                        Название фильма
                        <input className="conf-step__input" type="text" placeholder="Например, &laquo;Гражданин Кейн&raquo;" name="film_name" required onChange={handleSetFilm}/>
                    </label>
                    <label className="conf-step__label conf-step__label-fullsize" htmlFor="discription">
                        Описание фильма
                        <input className="conf-step__input" type="text" placeholder="Например, &laquo;Этот фильм о животных&raquo;" name="film_discription" required onChange={handleSetFilm}/>
                    </label>
                    <label className="conf-step__label conf-step__label-fullsize" htmlFor="duration">
                        Продолжительность фильма в минутах
                        <input className="conf-step__input" type="text" placeholder="Например, &laquo;120&raquo;" name="film_duration" required onChange={handleSetFilm}/>
                    </label>
                    <label className="conf-step__label conf-step__label-fullsize" htmlFor="origin">
                        Страна производства
                        <input className="conf-step__input" type="text" placeholder="Например, &laquo;Нидерланды&raquo;" name="film_origin" required onChange={handleSetFilm}/>
                    </label>
                    <label className="conf-step__label conf-step__label-fullsize" htmlFor="poster">
                        Ссылка на постер
                        <input className="conf-step__input" type="text" placeholder="Например, &laquo;https://vsekartinki.net/veselii-multik.png&raquo;" name="film_poster" required onChange={handleSetFilm}/>
                    </label>
                    <div className="conf-step__buttons text-center">
                        <input type="submit" value="Добавить фильм" className="conf-step__button conf-step__button-accent" onClick={handleAddFilm}/>
                        <button className="conf-step__button conf-step__button-regular" onClick={handleRemoveModal}>Отменить</button>
                    </div>
                </form>
            )
        })
    }

    return (
        <p className="conf-step__paragraph">
            <button className="conf-step__button conf-step__button-accent" onClick={handleCallModal}>Добавить фильм</button>
        </p>
    )
}