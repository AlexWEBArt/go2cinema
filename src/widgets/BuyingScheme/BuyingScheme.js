import Booking from './features/Booking/Booking'
import LegendHall from './features/LegendHall/LegendHall'
import SchemeHall from './features/SchemeHall/SchemeHall'
import SessionInfo from './features/SessionInfo/SessionInfo'
// import './buyingScheme.css'
import { useEffect, useState } from 'react'

export default function BuyingScheme({ halls, filmSeance, setSelectedPlaces }) {
    const [selectedChair, setSelectedChairs] = useState([])

    useEffect(() => {
        setSelectedPlaces(selectedChair)
    }, [selectedChair, setSelectedPlaces])

    const hall = halls.filter(hall => hall.hall_name === filmSeance.hallName)[0]

    return (
        <section className="buying">
            <SessionInfo seance={filmSeance} />
            <div className="buying-scheme">
                <SchemeHall hall={hall} filmSeance={filmSeance} setSelectedChairs={setSelectedChairs} />
                <LegendHall />
            </div>
            <Booking selectedChair={selectedChair} seance={filmSeance}/>
        </section>
    )
}