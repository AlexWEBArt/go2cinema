export default function TicketDiscription({ state }) {
    if (!state) return null

    const { seance, selectedChair } = state
    let averageCost = 0
    
    const table = selectedChair.map(selectedPlace => {
        averageCost += Number(selectedPlace.cost)
        return (
            <tr>
                <td style={{'textAlign': 'center'}}>{selectedPlace.row}</td>
                <td style={{'textAlign': 'center'}}>{selectedPlace.place}</td>
            </tr>
        )
    })

    return (
        <>
            <p className="ticket__info">На фильм: <span className="ticket__details ticket__title">{seance.film.film_name}</span></p>
            {/* <p className="ticket__info">Ряд: <span className="ticket__details ticket__chairs">{selectedChair[0].row}</span></p> */}
            <p className="ticket__info">Места:
                <span className="ticket__details ticket__chairs">
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Ряд</th>
                                <th>Место</th>
                            </tr>
                        </thead>
                        <tbody>
                            {table}
                        </tbody>
                    </table>
                </span>
            </p >
            <p className="ticket__info">В зале: <span className="ticket__details ticket__hall">{seance.hallName}</span></p>
            <p className="ticket__info">Начало сеанса: <span className="ticket__details ticket__start">{seance.startSession}</span></p>
            <p className="ticket__info">Стоимость: <span className="ticket__details ticket__cost">{averageCost}</span> рублей</p>
        </>
    )
}