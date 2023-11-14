import { useState } from "react"
import timlineStyleEditor from "../../../../utils/timlineStyleEditor"

import { v4 as uuidv4 } from "uuid"

export default function HallsTimeLineList({ hallsSeances, dragedFilm, setCallModal }) {
    const [selectedFilm, setSelectedFilm] = useState(null)
    // Необходимо написать утилиту, ктороя будет определять куда на временной линии разместить фильм в зависимости от начала сеанса

    const callModal = () => {
        document.querySelector('.popup').classList.add('active')
        setCallModal({
            title: 'Добавление сеанса', form: (
                <form action="add_movie" method="post" accept-charset="utf-8">
                    <label class="conf-step__label conf-step__label-fullsize" for="hall">
                        Название зала
                        <select class="conf-step__input" name="hall" required>
                            <option value="1" selected>Зал 1</option>
                            <option value="2">Зал 2</option>
                        </select>
                    </label>
                    <label class="conf-step__label conf-step__label-fullsize" for="name">
                        Время начала
                        <input class="conf-step__input" type="time" value="00:00" name="start_time" required />
                    </label>

                    <label class="conf-step__label conf-step__label-fullsize" for="name">
                        Название зала
                        <input class="conf-step__input" type="text" placeholder="Например, &laquo;Зал 1&raquo;" name="name" required />
                    </label>

                    <div class="conf-step__buttons text-center">
                        <input type="submit" value="Добавить" class="conf-step__button conf-step__button-accent" />
                            <button class="conf-step__button conf-step__button-regular">Отменить</button>
                    </div>
                </form>
            )
        })
    }

    const handleMouseUpOnTimline = (e) => {
        callModal()
    }

    console.log(dragedFilm)
    const renderSeanceMovie = (seanse) => {
        return (
            <div key={uuidv4()} className="conf-step__seances-movie" style={timlineStyleEditor(seanse.startSeances)}>
                <p className="conf-step__seances-movie-title">{seanse.seancesTitle}</p>
                <p className="conf-step__seances-movie-start">{seanse.startSeances}</p>
            </div>
        )
    }

    const renderSeancesHall = (hall) => {
        return (
            <div key={uuidv4()} className="conf-step__seances-hall">
                <h3 className="conf-step__seances-title">{hall.hallName}</h3>
                <div className="conf-step__seances-timeline" onMouseUp={handleMouseUpOnTimline}>
                    {hall.seances.map(seanse => renderSeanceMovie(seanse))}
                </div>
            </div>
        )
    }

    return (
        <div className="conf-step__movies">
            {hallsSeances.map(hall => renderSeancesHall(hall))}
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