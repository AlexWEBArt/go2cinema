import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import calculationOfFilmsStartTime from "../../utils/calculationOfFilmsStartTime"

export default function FilmsList({ data, setCallModal }) {

    const { films, halls, seances } = data

    const [newSeances, setNewSeances] = useState({
        seance_filmid: '',
        seance_hallid: '',
        seance_time: '',
        seance_start: '',
        seance_end: '',
    })

    const handleSetSeance = (e) => {
        const { name, value } = e.target;
        let stateValue
        switch (name) {
            case 'hall':
                stateValue = halls.filter(hall => hall.hall_name === value)[0].hall_id
                return setNewSeances(prevConfig => ({ ...prevConfig, seance_hallid: stateValue }));
            case 'film':
                stateValue = films.filter(film => film.film_name === value)[0].film_id
                return setNewSeances(prevConfig => ({ ...prevConfig, seance_filmid: stateValue }));
            case 'seance_time':
                return setNewSeances(prevConfig => ({...prevConfig, seance_time: value}));
            default:
                return null
        }

        setNewSeances(prevConfig => ({ ...prevConfig, [name]: value }));
    }

    const handleAddSeance = async (e) => {
        const filmDuration = films.filter(film => film.film_id === newSeances.seance_filmid)[0].film_duration
        const requestData = {
            ...newSeances,
            seance_start: calculationOfFilmsStartTime(newSeances.seance_time),
            seance_end: calculationOfFilmsStartTime(newSeances.seance_time) + filmDuration
        }
        // return await fetch('http://localhost:7070/createSeances', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(requestData)
        // })
        handleRemoveModal(e)
    }

    const handleRemoveModal = (e) => {
        e.preventDefault()
        e.target.closest('.popup').classList.remove('active')
    }

    const handleCallModal = (e) => {
        const { target } = e
        const filmName = target.closest('.conf-step__movie').querySelector('.conf-step__movie-title').innerText
        document.querySelector('.popup').classList.add('active')
        setCallModal({
            title: 'Добавление сеанса', form: (
                <form action="add_movie" method="post" acceptCharset="utf-8">
                    <label className="conf-step__label conf-step__label-fullsize" htmlFor="hall">
                        Название зала
                        <select className="conf-step__input" name="hall" required  onChange={handleSetSeance}>
                            {halls.map((hall, index) => <option key={uuidv4()}>{hall.hall_name}</option>)}
                            {/* {halls.map((hall, index) => <option value={index + 1} selected>{hall.hall_name}</option>)} */}
                        </select>
                    </label>
                    <label className="conf-step__label conf-step__label-fullsize" htmlFor="time">
                        Время начала
                        <input className="conf-step__input" type="time" name="seance_time" required onChange={handleSetSeance}/>
                    </label>

                    <label className="conf-step__label conf-step__label-fullsize" htmlFor="text">
                        Название фильма
                        <input className="conf-step__input" type="text" value={filmName} name="film" disabled onChange={handleSetSeance}/>
                    </label>

                    <div className="conf-step__buttons text-center">
                        <input type="submit" value="Добавить" className="conf-step__button conf-step__button-accent" onClick={handleAddSeance} />
                        <button className="conf-step__button conf-step__button-regular" onClick={handleRemoveModal}>Отменить</button>
                    </div>
                </form>
            )
        })
    }

    const renderFilmBlock = (film) => {
        return (
            <div key={uuidv4()} className="conf-step__movie" onClick={handleCallModal}>
                <img className="conf-step__movie-poster" alt="poster" src={film.film_poster} />
                <h3 className="conf-step__movie-title">{film.film_name}</h3>
                <p className="conf-step__movie-duration">{film.film_duration}</p>
            </div>
        )
    }

    return (
        <div className="conf-step__movies">
            {films.map(film => renderFilmBlock(film))}
        </div>
    )
}