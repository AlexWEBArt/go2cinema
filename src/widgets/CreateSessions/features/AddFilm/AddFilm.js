import { useContext, useEffect, useState } from "react";
import { FilmContext } from "../../../../providers/FilmProvider/FilmProvider";
import { AppDataContext } from "../../../../providers/AppDataProvider/AppDataProvider";
import Modal from "../../../../root/UI Kit/Modal/Modal";

export default function AddFilm() {
    const [visible, setVisible] = useState(false)
    const { film, setFilm, request, setRequest } = useContext(FilmContext)
    const { setRequestData } = useContext(AppDataContext)

    useEffect(() => {
        const addFilm = async () => {
            return await fetch('https://go2cinema-backend.onrender.com/addFilm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(film)
            })
        }

        if (request) {
            addFilm().then(result => {
                if (result) setRequestData(true)
            })
            setRequest(false)
        }
    }, [request, film, setRequestData, setRequest])

    const handleRemoveModal = (e) => {
        e.preventDefault()
        setVisible(false)
    }

    const handleAddFilm = async (e) => {
        e.preventDefault()
        const inputs = e.target.closest('form').elements
        const data = Array.from(inputs).map(input => { return { [input.name]: input.value } }).slice(0, 5)

        if (data.some(obj => Object.values(obj).some(value => value === ''))) {
            data.forEach(obj => {
                Object.entries(obj).forEach(([fieldName, value]) => {
                  if (value === '') {
                    e.target.closest('form').elements[fieldName].classList.add('invalid')
                  }
                })
              })
            return 
        }
        data.forEach(obj => {
            Object.entries(obj).forEach(([fieldName]) => {
                e.target.closest('form').elements[fieldName].classList.remove('invalid')
            });
          });

        setFilm(data)

        setRequest(true)

        handleRemoveModal(e)
    }

    const handleChange = (e) => {
        const { value } = e.target
        if (value.length > 1 && e.target.classList.contains('invalid')) {
            e.target.classList.remove('invalid')
        }
    }

    const handleCallModal = (e) => {
        setVisible(true)
    }

    return (
        <p className="conf-step__paragraph">
            <button className="conf-step__button conf-step__button-accent" onClick={handleCallModal}>Добавить фильм</button>
            {
                visible &&
                <Modal
                    title={'Добавление фильма'}
                    form={
                        <form action="add_movie" method="post" acceptCharset="utf-8">
                            <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                                Название фильма
                                <input className="conf-step__input" type="text" placeholder="Например, &laquo;Гражданин Кейн&raquo;" name="film_name" required onChange={handleChange}/>
                            </label>
                            <label className="conf-step__label conf-step__label-fullsize" htmlFor="discription">
                                Описание фильма
                                <input className="conf-step__input" type="text" placeholder="Например, &laquo;Этот фильм о животных&raquo;" name="film_description" required onChange={handleChange}/>
                            </label>
                            <label className="conf-step__label conf-step__label-fullsize" htmlFor="duration">
                                Продолжительность фильма в минутах
                                <input className="conf-step__input" type="text" placeholder="Например, &laquo;120&raquo;" name="film_duration" required onChange={handleChange}/>
                            </label>
                            <label className="conf-step__label conf-step__label-fullsize" htmlFor="origin">
                                Страна производства
                                <input className="conf-step__input" type="text" placeholder="Например, &laquo;Нидерланды&raquo;" name="film_origin" required onChange={handleChange}/>
                            </label>
                            <label className="conf-step__label conf-step__label-fullsize" htmlFor="poster">
                                Ссылка на постер
                                <input className="conf-step__input" type="text" placeholder="Например, &laquo;https://vsekartinki.net/veselii-multik.png&raquo;" name="film_poster" required onChange={handleChange}/>
                            </label>
                            <div className="conf-step__buttons text-center">
                                <input type="submit" value="Добавить фильм" className="conf-step__button conf-step__button-accent" onClick={handleAddFilm} />
                                <button className="conf-step__button conf-step__button-regular" onClick={handleRemoveModal}>Отменить</button>
                            </div>
                        </form>
                    }
                    handleRemoveModal={() => setVisible(false)}
                />
            }
        </p>
    )
}