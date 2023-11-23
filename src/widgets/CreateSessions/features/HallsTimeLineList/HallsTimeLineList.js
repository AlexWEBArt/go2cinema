import { useState } from "react"
import timlineStyleEditor from "../../../../utils/timlineStyleEditor"

import { v4 as uuidv4 } from "uuid"

export default function HallsTimeLineList({ data, hallsSeances, setCallModal }) {
    // Необходимо написать утилиту, ктороя будет определять куда на временной линии разместить фильм в зависимости от начала сеанса
    const { films, halls, seances } = data

    const handleRemoveModal = (e) => {
        e.preventDefault()
        e.target.closest('.popup').classList.remove('active')
    }

    const handleRemoveSeance = async (e, id) => {
        e.preventDefault()

        const result = await fetch('http://localhost:7070/removeSeance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ seance_id: id })
        })
        if (!result.ok) console.log('Что-то пошло не так')
        handleRemoveModal(e)
    }

    const handleCallModalRemoveSeanсe = (e) => {
        const { target } = e
        const seanceName = target.closest('.conf-step__seances-movie').querySelector('.conf-step__seances-movie-title').innerText
        const seanceStart = target.closest('.conf-step__seances-movie').querySelector('.conf-step__seances-movie-start').innerText
        const seanceHall = target.closest('.conf-step__seances-hall').querySelector('.conf-step__seances-title').innerText

        const filmid = films.filter(film => film.film_name === seanceName)[0].film_id
        const hallid = halls.filter(hall => hall.hall_name.toUpperCase() === seanceHall)[0].hall_id
        const seanceId = seances.filter(seance  => seance.seance_filmid === filmid && seance.seance_hallid === hallid)[0].seance_id
        
        document.querySelector('.popup').classList.add('active')
        setCallModal({
            title: 'Снятие с сеанса', form: (
                <form action="delete_hall" method="post" acceptCharset="utf-8">
                    <p className="conf-step__paragraph">Вы действительно хотите снять с сеанса <span>{seanceStart}</span> в зале <span>{seanceHall}</span> фильм <span>{seanceName}</span>?</p>
                    <div className="conf-step__buttons text-center">
                        <input type="submit" value="Удалить" className="conf-step__button conf-step__button-accent" onClick={(e) => handleRemoveSeance(e, seanceId)}/>
                        <button className="conf-step__button conf-step__button-regular" onClick={handleRemoveModal}>Отменить</button>
                    </div>
                </form>
            )
        })
    }

    const renderSeanceMovie = (seance) => {
        const filmName = films.filter(film => film.film_id === seance.seance_filmid)[0].film_name
        return (
            <div key={uuidv4()} className="conf-step__seances-movie" style={timlineStyleEditor(seance.seance_time)} onClick={handleCallModalRemoveSeanсe}>
                <p className="conf-step__seances-movie-title">{filmName}</p>
                <p className="conf-step__seances-movie-start">{seance.seance_time}</p>
            </div>
        )
    }

    const renderSeancesHall = (hall) => {
        const hallSeances = seances.filter(seance => seance.seance_hallid === hall.hall_id)

        return (
            <div key={uuidv4()} className="conf-step__seances-hall">
                <h3 className="conf-step__seances-title">{hall.hall_name}</h3>
                <div className="conf-step__seances-timeline">
                    {hallSeances.map(seance => renderSeanceMovie(seance))}
                </div>
            </div>
        )
    }

    return (
        <div className="conf-step__movies">
            {halls.map(hall => renderSeancesHall(hall))}
        </div>
    )
}