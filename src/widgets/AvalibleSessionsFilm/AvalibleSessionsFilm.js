import AvalibleSessionsFilmItem from './features/AvalibleSessionsFilmItem/AvalibleSessionsFilmItem'
import AvalibleSessions from './features/AvalibleSessions/AvalibleSessions'

export default function AvalibleSessionsFilm({film, filmSeances}) {

    if (!filmSeances) return null

    return (
        <section className="movie">
            <AvalibleSessionsFilmItem film={film} />
            
            <AvalibleSessions film={film} filmSeances={filmSeances}/>
        </section>
    )
}