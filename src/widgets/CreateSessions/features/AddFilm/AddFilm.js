import { useState } from "react";
import Modal from "../../../../root/UI Kit/Modal/Modal";

export default function AddFilm() {
    const [film, setFilm] = useState({
        name: '',
        discription: '',
        duration: '',
        origin: '',
        poster: '',
    })

    const handleSetPrice = (e) => {
        const { name, value } = e.target;
        setFilm(prevConfig => ({...prevConfig, [name]: value}));
    }

    const handleRemoveModal = (e) => [
        e.target.closest('popup').remove()
    ]

    const handleAddFilm = async () => {
        const requestData = {
            film
        }
        // return await fetch('http://localhost:7070/addFilm', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(requestData)
        // })
    }

    const handleCallModal = (e) => {
        const { target } = e
        const hallName = target.closest('li').innerHTML
        return (
            <Modal title={'Добавление фильма'} form={
                <form action="add_movie" method="post" accept-charset="utf-8">
                    <label class="conf-step__label conf-step__label-fullsize" for="name">
                        Название фильма
                        <input class="conf-step__input" type="text" placeholder="Например, &laquo;Гражданин Кейн&raquo;" name="name" required onChange={handleSetPrice}/>
                    </label>
                    <label class="conf-step__label conf-step__label-fullsize" for="discription">
                        Описание фильма
                        <input class="conf-step__input" type="text" placeholder="Например, &laquo;Этот фильм о животных&raquo;" name="discription" required onChange={handleSetPrice}/>
                    </label>
                    <label class="conf-step__label conf-step__label-fullsize" for="duration">
                        Продолжительность фильма в минутах
                        <input class="conf-step__input" type="text" placeholder="Например, &laquo;120&raquo;" name="duration" required onChange={handleSetPrice}/>
                    </label>
                    <label class="conf-step__label conf-step__label-fullsize" for="origin">
                        Страна производства
                        <input class="conf-step__input" type="text" placeholder="Например, &laquo;Нидерланды&raquo;" name="origin" required onChange={handleSetPrice}/>
                    </label>
                    <label class="conf-step__label conf-step__label-fullsize" for="poster">
                        Ссылка на постер
                        <input class="conf-step__input" type="text" placeholder="Например, &laquo;https://vsekartinki.net/veselii-multik.png&raquo;" name="poster" required onChange={handleSetPrice}/>
                    </label>
                    <div class="conf-step__buttons text-center">
                        <input type="submit" value="Добавить фильм" class="conf-step__button conf-step__button-accent" />
                        <button class="conf-step__button conf-step__button-regular" onClick={handleRemoveModal}>Отменить</button>
                    </div>
                </form>
            } />
        )
    }

    return (
        <p className="conf-step__paragraph">
            <button className="conf-step__button conf-step__button-accent" onClick={handleCallModal}>Добавить фильм</button>
        </p>
    )
}