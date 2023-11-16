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

    const handleCallModalRemoveSeanse = (e) => {
        const { target } = e
        const seanceName = target.closest('.conf-step__seances-movie').querySelector('.conf-step__seances-movie-title').innerText
        const seanceStart = target.closest('.conf-step__seances-movie').querySelector('.conf-step__seances-movie-start').innerText
        const seanceHall = target.closest('.conf-step__seances-hall').querySelector('.conf-step__seances-title').innerText
        document.querySelector('.popup').classList.add('active')
        setCallModal({
            title: 'Снятие с сеанса', form: (
                <form action="delete_hall" method="post" acceptCharset="utf-8">
                    <p className="conf-step__paragraph">Вы действительно хотите снять с сеанса <span>{seanceStart}</span> в зале <span>{seanceHall}</span> фильм <span>{seanceName}</span>?</p>
                    <div className="conf-step__buttons text-center">
                        <input type="submit" value="Удалить" className="conf-step__button conf-step__button-accent" />
                        <button className="conf-step__button conf-step__button-regular" onClick={handleRemoveModal}>Отменить</button>
                    </div>
                </form>
            )
        })
    }

    const renderSeanceMovie = (seance) => {
        const filmName = films.filter(film => film.film_id === seance.seance_filmid)[0].film_name
        console.log(filmName)
        return (
            <div key={uuidv4()} className="conf-step__seances-movie" style={timlineStyleEditor(seance.seance_time)} onClick={handleCallModalRemoveSeanse}>
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
            {/* {hallsSeances.map(hall => renderSeancesHall(hall))} */}
            {halls.map(hall => renderSeancesHall(hall))}
            {/* <div className="conf-step__seances">
                <div className="conf-step__seances-hall">
                    <h3 className="conf-step__seances-title">Зал 1</h3>
                    <div className="conf-step__seances-timeline">
                        <div className="conf-step__seances-movie" style="width: 60px; background-color: rgb(133, 255, 137); left: 0;">
                            <p className="conf-step__seances-movie-title">Миссия выполнима</p>
                            <p className="conf-step__seances-movie-start">00:00</p>
                        </div>
                        <div className="conf-step__seances-movie" style="width: 60px; background-color: rgb(133, 255, 137); left: 360px;">
                            <p className="conf-step__seances-movie-title">Миссия выполнима</p>
                            <p className="conf-step__seances-movie-start">12:00</p>
                        </div>
                        <div className="conf-step__seances-movie" style="width: 65px; background-color: rgb(202, 255, 133); left: 420px;">
                            <p className="conf-step__seances-movie-title">Звёздные войны XXIII: Атака клонированных клонов</p>
                            <p className="conf-step__seances-movie-start">14:00</p>
                        </div>
                    </div>
                </div>
                <div className="conf-step__seances-hall">
                    <h3 className="conf-step__seances-title">Зал 2</h3>
                    <div className="conf-step__seances-timeline">
                        <div className="conf-step__seances-movie" style="width: 65px; background-color: rgb(202, 255, 133); left: 595px;">
                            <p className="conf-step__seances-movie-title">Звёздные войны XXIII: Атака клонированных клонов</p>
                            <p className="conf-step__seances-movie-start">19:50</p>
                        </div>
                        <div className="conf-step__seances-movie" style="width: 60px; background-color: rgb(133, 255, 137); left: 660px;">
                            <p className="conf-step__seances-movie-title">Миссия выполнима</p>
                            <p className="conf-step__seances-movie-start">22:00</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}