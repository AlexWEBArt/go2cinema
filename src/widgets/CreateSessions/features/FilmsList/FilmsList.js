import { useContext, useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import calculationOfFilmsStartTime from "../../utils/calculationOfFilmsStartTime"
import { SeanceContext } from "../../../../providers/SeanceProvider/SeanceProvider"
import { AppDataContext } from "../../../../providers/AppDataProvider/AppDataProvider"
import Modal from "../../../../root/UI Kit/Modal/Modal"
import ErrorMessage from "../../../../root/ErrorMessage/ErrorMessage"

export default function FilmsList({ data }) {
    const [visibleModal, setVisibleModal] = useState(false)
    const [visibleError, setVisibleError] = useState(false)
    const [contentModal, setContentModal] = useState({
        title: '',
        form: null
    })
    const { films, halls } = data

    const { seance, setSeance, request, setRequest } = useContext(SeanceContext)
    const { setRequestData } = useContext(AppDataContext)

    useEffect(() => {
        const createSeance = async () => {
            return await fetch('https://go2cinema-backend.onrender.com/createSeance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(seance)
            })
        }

        if (request) {
            createSeance().then(result => {
                if (result) setRequestData(true)
            })
            setRequest(false)
        }
    }, [request, films, seance, setRequestData, setRequest])

    const handleAddSeance = async (e) => {
        e.preventDefault()
        const formHall = e.target.closest('form').elements.hall.value
        const formTime = e.target.closest('form').elements.seance_time.value
        const formFilm = e.target.closest('form').elements.film.placeholder
        const film = films.filter(film => film.film_name.replace(/\s/g, "") === formFilm.replace(/\s/g, ""))[0]
        const hall = halls.filter(hall => hall.hall_name === formHall)[0]
        const seanceConfig = hall.hall_config.replace(/conf-step/g, 'buying-scheme').replace(/className/g, 'class')

        setSeance({
            seance_hallid: hall.hall_id,
            seance_filmid: film.film_id,
            seance_time: formTime,
            seance_start: calculationOfFilmsStartTime(formTime),
            seance_end: calculationOfFilmsStartTime(formTime) + film.film_duration,
            seance_config: seanceConfig
        })

        setRequest(true)

        handleRemoveModal(e)
    }

    const handleRemoveModal = (e) => {
        e.preventDefault()

        setVisibleModal(false)
    }

    const handleRemoveError = (e) => {
        e.preventDefault()

        setVisibleError(false)
    }

    const handleRemoveFilm = async (e, id) => {
        e.preventDefault()

        const result = await fetch('https://go2cinema-backend.onrender.com/removeFilm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ film_id: id })
        })
        handleRemoveModal(e)
        if (!result.ok) return setVisibleError(true)
        setRequestData(true)
    }

    const handleCallModal = (e) => {
        const { target } = e
        const filmName = target.closest('.conf-step__movie').querySelector('.conf-step__movie-title').innerText

        if (target.classList.contains('conf-step__button-trash')) {
            const filmId = films.filter(film => film.film_name.replace(/\s/g, "") === filmName.replace(/\s/g, ""))[0].film_id

            setContentModal({
                title: 'Удаление фильма',
                form: (
                    <form action="delete_hall" method="post" acceptCharset="utf-8">
                        <p className="conf-step__paragraph">Вы действительно хотите удалить фильм <span>{filmName}</span>?</p>

                        <div className="conf-step__buttons text-center">
                            <input type="submit" value="Удалить" className="conf-step__button conf-step__button-accent" onClick={(e) => handleRemoveFilm(e, filmId)} />
                            <button className="conf-step__button conf-step__button-regular" onClick={handleRemoveModal}>Отменить</button>
                        </div>
                    </form>
                )
            })
            return setVisibleModal(true)
        }

        setContentModal({
            title: 'Добавление сеанса',
            form: (
                <form action="add_movie" method="post" acceptCharset="utf-8">
                    <label className="conf-step__label conf-step__label-fullsize" htmlFor="hall">
                        Название зала
                        <select className="conf-step__input" name="hall" required >
                            {halls.map(hall => <option key={uuidv4()}>{hall.hall_name}</option>)}
                        </select>
                    </label>
                    <label className="conf-step__label conf-step__label-fullsize" htmlFor="time">
                        Время начала
                        <input className="conf-step__input" type="time" name="seance_time" required />
                    </label>

                    <label className="conf-step__label conf-step__label-fullsize" htmlFor="text">
                        Название фильма
                        <input className="conf-step__input" type="text" placeholder={filmName} name="film" disabled />
                    </label>

                    <div className="conf-step__buttons text-center">
                        <input type="submit" value="Добавить" className="conf-step__button conf-step__button-accent" onClick={handleAddSeance} />
                        <button className="conf-step__button conf-step__button-regular" onClick={handleRemoveModal}>Отменить</button>
                    </div>
                </form>
            )
        })
        setVisibleModal(true)
    }

    const renderFilmBlock = (film) => {
        return (
            <div key={uuidv4()} className="conf-step__movie" onClick={handleCallModal}>
                <img className="conf-step__movie-poster" alt="poster" src={film.film_poster} />
                <h3 className="conf-step__movie-title">{film.film_name} <button className="conf-step__button conf-step__button-trash" onClick={handleCallModal}></button></h3>
                <p className="conf-step__movie-duration">{film.film_duration}</p>
            </div>
        )
    }

    return (
        <div className="conf-step__movies">
            {films.map(film => renderFilmBlock(film))}
            {
                visibleModal &&
                <Modal
                    title={contentModal.title}
                    form={contentModal.form}
                    handleRemoveModal={() => setVisibleModal(false)}
                />
            }
            {
                visibleError &&
                <ErrorMessage
                    message={'Этот фильм установлен для показа в сеансах. Отмените сеансы фильма и повторите попытку.'}
                    onClose={handleRemoveError}
                />
            }
        </div>
    )
}