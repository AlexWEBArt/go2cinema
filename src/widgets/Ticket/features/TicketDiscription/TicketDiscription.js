import { v4 as uuidv4 } from "uuid"

export default function TicketDiscription({ selectedSession, selectedPlaces }) {

    const { hallName, film, startSession } = selectedSession

    let averageCost = 0

    const table = selectedPlaces.map(selectedPlace => {
        averageCost += Number(selectedPlace.cost)
        return (
            <tr key={uuidv4()}>
                <td style={{ 'textAlign': 'center' }}>{selectedPlace.row}</td>
                <td style={{ 'textAlign': 'center' }}>{selectedPlace.place}</td>
            </tr>
        )
    })

    return (
        <>
            <p className="ticket__info">На фильм: <span className="ticket__details ticket__title">{film.film_name}</span></p>
            <p >
                <span className="ticket__details ticket__chairs">

                </span>
            </p >
            <table border="1" style={{fontSize: '16px', margin: '10px 0'}}>
            <caption className="ticket__info">Места:</caption>
                <thead border="0">
                    <tr border="0">
                        <th style={{padding: '5px'}}>Ряд</th>
                        <th style={{padding: '5px'}}>Место</th>
                    </tr>
                </thead>
                <tbody border="0">
                    {table}
                </tbody>
            </table>
            <p className="ticket__info">В зале: <span className="ticket__details ticket__hall">{hallName}</span></p>
            <p className="ticket__info">Начало сеанса: <span className="ticket__details ticket__start">{startSession}</span></p>
            <p className="ticket__info">Стоимость: <span className="ticket__details ticket__cost">{averageCost}</span> рублей</p>
        </>
    )
}