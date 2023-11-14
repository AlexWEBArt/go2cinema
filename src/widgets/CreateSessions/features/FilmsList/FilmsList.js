import { v4 as uuidv4 } from "uuid"

export default function FilmsList({ films, setDragedFilm }) {

    const handleMouseDownOnFilm = (e) => {
        const { target } = e
        const backgroundColor = target.closest('.conf-step__movie').style.background
        const filmName = target.closest('.conf-step__movie').querySelector('.conf-step__movie-title').innerText
        setDragedFilm(target.closest('.conf-step__movie'))
        console.log(e)
    }

    const renderFilmBlock = (film) => {
        return (
            <div key={uuidv4()} className="conf-step__movie" onMouseDown={handleMouseDownOnFilm}>
                <img className="conf-step__movie-poster" alt="poster" src={film.film_poster} />
                <h3 className="conf-step__movie-title">{film.film_name}</h3>
                <p className="conf-step__movie-duration">{film.film_duration}</p>
            </div>
        )
    }

    return (
        <div className="conf-step__movies">
            {films.map(film => renderFilmBlock(film))}
            {/* <div className="conf-step__movie">
                <img className="conf-step__movie-poster" alt="poster" src="i/poster.png" />
                <h3 className="conf-step__movie-title">Звёздные войны XXIII: Атака клонированных клонов</h3>
                <p className="conf-step__movie-duration">130 минут</p>
            </div>

            <div className="conf-step__movie">
                <img className="conf-step__movie-poster" alt="poster" src="i/poster.png" />
                <h3 className="conf-step__movie-title">Миссия выполнима</h3>
                <p className="conf-step__movie-duration">120 минут</p>
            </div>

            <div className="conf-step__movie">
                <img className="conf-step__movie-poster" alt="poster" src="i/poster.png" />
                <h3 className="conf-step__movie-title">Серая пантера</h3>
                <p className="conf-step__movie-duration">90 минут</p>
            </div>

            <div className="conf-step__movie">
                <img className="conf-step__movie-poster" alt="poster" src="i/poster.png" />
                <h3 className="conf-step__movie-title">Движение вбок</h3>
                <p className="conf-step__movie-duration">95 минут</p>
            </div>

            <div className="conf-step__movie">
                <img className="conf-step__movie-poster" alt="poster" src="i/poster.png" />
                <h3 className="conf-step__movie-title">Кот Да Винчи</h3>
                <p className="conf-step__movie-duration">100 минут</p>
            </div> */}
        </div>
    )
}