import { Link } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"

export default function AvalibleSessions({film, filmSeances}) {

    // if (!hallSessions) return null
    const halls = []

    filmSeances.map(seance => {
        if (!halls.includes(seance.hall_name)) {
            halls.push(seance.hall_name)
        }
    })


    const renderStartSession = (session, hall) => {
        return(
            <li key={uuidv4()} className="movie-seances__time-block">
                <Link 
                    className="movie-seances__time" 
                    to={'/hall'} 
                    state={{
                        hallName: hall,
                        film: film,
                        startSession: session
                    }}
                >
                    {session}
                </Link>
            </li>
        )
    }

    return (
        <>
            {
                halls.map(hall => {
                    return (
                        <div key={uuidv4()} className="movie-seances__hall">
                            <h3 className="movie-seances__hall-title">{hall}</h3>
                            <ul className="movie-seances__list">
                            {
                                filmSeances.map(seance => {
                                    return (            
                                        renderStartSession(seance.seance_time, hall)   
                                    )
                                })
                            }
                            </ul>
                        </div>
                    )
                })
            }
        </>    
    )
}