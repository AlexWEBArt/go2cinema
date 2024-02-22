import { useContext } from "react"
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import { ClientContext } from "../../../../providers/ClientProvider/ClientProvider"

export default function AvalibleSessions({ film, filmSeances }) {

    const { setSelectedSession } = useContext(ClientContext)

    const halls = []

    filmSeances.forEach(seance => {
        // использовать сет или мап, обернуть в useMemo
        if (!halls.includes(seance.hall_name)) {
            halls.push(seance.hall_name)
        }
    })

    const renderStartSession = (seance, hall) => {
        return (
            <li key={uuidv4()} className="movie-seances__time-block" onClick={() => setSelectedSession({
                hallName: hall,
                film: film,
                seanceId: seance.seance_id,
                startSession: seance.seance_time,
                seanceHallConfig: seance.seance_config
            })}>
                <Link
                    className="movie-seances__time"
                    to={'/go2cinema/hall'}
                >
                    {seance.seance_time}
                </Link>
            </li>
        )
    }

    return (
        <>
            {
                halls.map(hall => {
                    return (
                        // использовать статичные ключи
                        <div key={uuidv4()} className="movie-seances__hall">
                            <h3 className="movie-seances__hall-title">{hall}</h3>
                            <ul className="movie-seances__list">
                                {
                                    filmSeances.map(seance => {
                                        if (seance.hall_name !== hall) return null

                                        return (
                                            renderStartSession(seance, hall)
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