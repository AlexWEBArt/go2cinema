import { Link } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"

export default function AvalibleSessions({film, filmSeances}) {

    // if (!hallSessions) return null
    console.log(filmSeances)
    const renderStartSession = (session) => {
        return(
            <li key={uuidv4()} className="movie-seances__time-block">
                <Link className="movie-seances__time" to={'/hall'} state={filmSeances}>
                    {session}
                </Link>
            </li>
        )
    }

    return (
        <div key={uuidv4()} className="movie-seances__hall">
            <h3 className="movie-seances__hall-title">{filmSeances.hall_name}</h3>
            <ul className="movie-seances__list">
                {filmSeances.map(session => renderStartSession(session.seance_time))}
            </ul>
        </div>
    )
}