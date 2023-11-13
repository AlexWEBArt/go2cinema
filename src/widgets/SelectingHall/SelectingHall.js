// import AvalibleSessionsFilmItem from './features/AvalibleSessionsFilmItem/AvalibleSessionsFilmItem'
// import AvalibleSessions from './features/AvalibleSessions/AvalibleSessions'
// import './avalibleSessionsFilm.css'

import CreateHall from "./features/CreateHall/CreateHall";
import HallListItem from "./features/HallListItem/HallListItem";

import { v4 as uuidv4 } from "uuid"


export default function SelectingHall({halls, setCallModal}) {


    return (
        <div className="conf-step__wrapper">
            <p className="conf-step__paragraph">Доступные залы:</p>

            <ul className="conf-step__list">
                {halls.map(hall => <HallListItem key={uuidv4()} hall={hall} setCallModal={setCallModal}/>)}
            </ul>
            <CreateHall setCallModal={setCallModal}/>
        </div>
    )
}