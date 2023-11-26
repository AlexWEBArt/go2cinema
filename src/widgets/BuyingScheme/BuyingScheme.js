// import AvalibleSessionsFilmItem from './features/AvalibleSessionsFilmItem/AvalibleSessionsFilmItem'
// import AvalibleSessions from './features/AvalibleSessions/AvalibleSessions'
import Booking from './features/Booking/Booking'
import LegendHall from './features/LegendHall/LegendHall'
import SchemeHall from './features/SchemeHall/SchemeHall'
import SessionInfo from './features/SessionInfo/SessionInfo'
import './buyingScheme.css'
import { useState } from 'react'

// import { v4 as uuidv4 } from "uuid"


export default function BuyingScheme({ halls, filmSeance }) {
    const [selectedChair, setSelectedChairs] = useState([])

    const hall = halls.filter(hall => hall.hall_name === filmSeance.hallName)[0]

    return (
        <section className="buying">
            <SessionInfo seance={filmSeance} />
            <div className="buying-scheme">
                <SchemeHall hall={hall} setSelectedChairs={setSelectedChairs} />
                <LegendHall />
            </div>
            <Booking selectedChair={selectedChair} seance={filmSeance}/>
        </section>
    )
}