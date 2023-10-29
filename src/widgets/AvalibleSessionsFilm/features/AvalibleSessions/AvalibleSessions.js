import { Link } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"

export default function AvalibleSessions({hallSessions}) {

    const renderStartSession = (session) => {
        return(
            <li key={uuidv4()} className="movie-seances__time-block">
                <Link className="movie-seances__time" to={'/hall'} state={{ some: "value" }}>
                    {session}
                </Link>
            </li>
        )
    }

    return (
        <div key={uuidv4()} className="movie-seances__hall">
            <h3 className="movie-seances__hall-title">{hallSessions.hallName}</h3>
            <ul className="movie-seances__list">
                {hallSessions.sessions.map(session => renderStartSession(session))}
            </ul>
        </div>
    )
}