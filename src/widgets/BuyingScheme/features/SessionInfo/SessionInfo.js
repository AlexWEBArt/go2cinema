export default function SessionInfo({film}) {

    return (
        <div className="buying__info">
            <div className="buying__info-description">
                <h2 className="buying__info-title">{film.title}</h2>
                <p className="buying__info-start">Начало сеанса: {film.hallsSessions[0].sessions[0]}</p>
                <p className="buying__info-hall">{film.hallsSessions[0].hallName}</p>          
            </div>
            <div className="buying__info-hint">
                <p>Тапните дважды,<br/>чтобы увеличить</p>
            </div>
        </div>
    )
}