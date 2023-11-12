// import { v4 as uuidv4 } from "uuid"

import { useState } from "react";
import ChangeHall from "../PanelItem/features/ChangeHall/ChangeHall";
import SaveConfig from "../PanelItem/features/SaveConfig/SaveConfig";
import CharacteristicsHall from "./features/CharacteristicsHall/CharacteristicsHall";
import ConfigHallContainer from "./features/ConfigHallContainer/ConfigHallContainer";
import TypesOfChairs from "./features/TypesOfChairs/TypesOfChairs";


export default function HallsConfiguration({ halls }) {
    const [changedHall, setChangedHall] = useState(null)
    console.log(changedHall)

    const hall = halls.filter(hall => hall.hall_name === changedHall)[0]
    console.log(hall)
    return (
        <div className="conf-step__wrapper">
            <ChangeHall halls={halls} setChangedHall={setChangedHall}/>
            <CharacteristicsHall hall={hall}/>
            <TypesOfChairs />
            <ConfigHallContainer hall={hall}/>
            <SaveConfig />
        </div>
    )
}