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
    console.log(isFrom)
    const filmList = [
        {
            image: 'i/poster1.jpg',
            title: 'Звёздные войны XXIII: Атака клонированных клонов',
            discription: 'Две сотни лет назад малороссийские хутора разоряла шайка нехристей-ляхов во главе с могущественным колдуном.',
            duration: '130 минут',
            origin: 'США',
            hallsSessions: [
                {
                    hallName: 'Зал 1',
                    sessions: [
                        '10:20', '14:10', '18:40', '22:00'
                    ]
                },
                {
                    hallName: 'Зал 2',
                    sessions: [
                        '11:15', '14:40', '16:00', '18:30', '21:00', '23:30'
                    ]
                },
            ]
        },
        // {
        //     image: 'i/poster1.jpg',
        //     title: 'Альфа',
        //     discription: '20 тысяч лет назад Земля была холодным и неуютным местом, в котором смерть подстерегала человека на каждом шагу.',
        //     duration: '96 минут',
        //     origin: 'Франция'
        // },
        // {
        //     image: 'i/poster1.jpg',
        //     title: 'Хищник',
        //     discription: 'Самые опасные хищники Вселенной, прибыв из глубин космоса, высаживаются на улицах маленького городка, чтобы начать свою кровавую охоту. Генетически модернизировав себя с помощью ДНК других видов, охотники стали ещё сильнее, умнее и беспощаднее.',
        //     duration: '101 минут',
        //     origin: 'Канада, США'
        // },
    ]

    return (
        <section className="ticket">
            <TicketTitle title={title}/>
            <div className="ticket__info-wrapper">
                <TicketDiscription film={filmList[0]} />
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
                {/* <SessionInfo film={filmList[0]} />
                
                    <SchemeHall />
                    <LegendHall />
                
                <Booking /> */}
            </div>
        </section>
    )
}