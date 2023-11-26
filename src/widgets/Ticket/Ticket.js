// import AvalibleSessionsFilmItem from './features/AvalibleSessionsFilmItem/AvalibleSessionsFilmItem'
// import AvalibleSessions from './features/AvalibleSessions/AvalibleSessions'
// import Booking from './features/Booking/Booking'
// import LegendHall from './features/LegendHall/LegendHall'
// import SchemeHall from './features/SchemeHall/SchemeHall'
// import SessionInfo from './features/SessionInfo/SessionInfo'
import { useState } from 'react'
import GetCode from './features/GetCode/GetCode'
import Hint from './features/Hint/Hint'
import TicketDiscription from './features/TicketDiscription/TicketDiscription'
import TicketTitle from './features/TicketTitle/TicketTitle'
import './ticket.css'
import { useLocation } from 'react-router'
import ImageQR from './features/ImageQR/ImageQR'

// import { v4 as uuidv4 } from "uuid"


export default function Ticket({from}) {
    const [isFrom, setIsFrom] = useState(from)
    const { state } = useLocation()
    const title = isFrom === 'payment' ? 'Вы выбрали билеты:' : 'Электронный билет'


    return (
        <section className="ticket">
            <TicketTitle title={title}/>
            <div className="ticket__info-wrapper">
                <TicketDiscription state={state} />
                {
                    isFrom === 'payment' && 
                    <>
                        <GetCode />
                        <Hint>
                            После оплаты билет будет доступен в этом окне, а также придёт вам на почту. Покажите QR-код нашему контроллёру у входа в зал.
                        </Hint>
                    </>
                    
                }
                {
                    isFrom === 'ticket' && 
                    <>
                        <ImageQR />
                        <Hint>
                            Покажите QR-код нашему контроллеру для подтверждения бронирования.
                        </Hint>
                    </>
                }
                <Hint>
                    Приятного просмотра!
                </Hint>
            </div>
        </section>
    )
}