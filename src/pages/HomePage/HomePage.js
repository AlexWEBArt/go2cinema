import AvalibleSessionsFilm from "../../widgets/AvalibleSessionsFilm/AvalibleSessionsFilm";
import DateLineSelection from "../../widgets/DateLineSelection/DateLineSelection";
import { v4 as uuidv4 } from "uuid"
import Loader from "../../root/Loader/Loader";

export default function HomePage({ data }) {

    if (!data) return <Loader/>
// обернуть useMamo 10-22
    const { films, halls, seances } = data

    const openHalls = halls.filter(hall => hall.hall_open)
    const openSeances = seances.filter(seance =>
        openHalls.some(openHall => openHall.hall_id === seance.seance_hallid)
    )
    const uniqueFilmIds = new Set();
    const availableFilms = openSeances
        .map(seance => {
            const film = films.find(film => film.film_id === seance.seance_filmid);
            return film;
        })
        .filter(film => film && !uniqueFilmIds.has(film.film_id) && uniqueFilmIds.add(film.film_id));

    return (
        <main className="page">
            {/* <DateLineSelection /> */}
            {availableFilms.map(film => {
                // передавать готовые данные для рендеринга
                const filmSeances = openSeances.filter(seance => seance.seance_filmid === film.film_id)
                const filmHalls = filmSeances.map(seance => {
                    const hallName = openHalls.filter(hall => seance.seance_hallid === hall.hall_id)[0].hall_name

                    return ({
                        ...seance,
                        hall_name: hallName
                    })
                })
                // изпользовать в качестве ключа айди фильма
                return <AvalibleSessionsFilm key={film.film_id} film={film} filmSeances={filmHalls} />
            })}
        </main>
    )
}