export default function TicketDiscription({film}) {

    const chairs = '6, 7'
    const cost = '600'

    return (
        <>
            <p className="ticket__info">На фильм: <span className="ticket__details ticket__title">{film.title}</span></p>
            <p className="ticket__info">Места: <span className="ticket__details ticket__chairs">{chairs}</span></p>
            <p className="ticket__info">В зале: <span className="ticket__details ticket__hall">{film.hallsSessions[0].hallName}</span></p>
            <p className="ticket__info">Начало сеанса: <span className="ticket__details ticket__start">{film.hallsSessions[0].sessions[2]}</span></p>
            <p className="ticket__info">Стоимость: <span className="ticket__details ticket__cost">{cost}</span> рублей</p>
        </>
    )
}