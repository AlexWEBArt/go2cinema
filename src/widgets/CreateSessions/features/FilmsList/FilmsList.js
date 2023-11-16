import { v4 as uuidv4 } from "uuid"

export default function FilmsList({ data, setCallModal }) {

    const { films, halls, seances } = data

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
                <form action="add_movie" method="post" accept-charset="utf-8">
                    <label class="conf-step__label conf-step__label-fullsize" for="hall">
                        Название зала
                        <select class="conf-step__input" name="hall" required>
                            {halls.map((hall, index) => <option value={index + 1} selected>{hall.hall_name}</option>)}
                        </select>
                    </label>
                    <label class="conf-step__label conf-step__label-fullsize" for="name">
                        Время начала
                        <input class="conf-step__input" type="time" name="start_time" required />
                    </label>

                    <label class="conf-step__label conf-step__label-fullsize" for="name">
                        Название фильма
                        <input class="conf-step__input" type="text" value={filmName} name="name" disabled />
                    </label>

                    <div class="conf-step__buttons text-center">
                        <input type="submit" value="Добавить" class="conf-step__button conf-step__button-accent" />
                        <button class="conf-step__button conf-step__button-regular" onClick={handleRemoveModal}>Отменить</button>
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