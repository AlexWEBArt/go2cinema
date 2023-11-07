export default function SessionInfo({seance}) {

    return (
        <div className="buying__info">
            <div className="buying__info-description">
                <h2 className="buying__info-title">{seance.film.film_name}</h2>
                <p className="buying__info-start">Начало сеанса: {seance.startSession}</p>
                <p className="buying__info-hall">{seance.hallName}</p>          
            </div>
            <div className="buying__info-hint">
                <p>Тапните дважды,<br/>чтобы увеличить</p>
            </div>
        </div>
    )
}