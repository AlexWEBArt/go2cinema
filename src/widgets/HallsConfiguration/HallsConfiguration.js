// import { v4 as uuidv4 } from "uuid"

import { useState } from "react";
import ChangeHall from "../PanelItem/features/ChangeHall/ChangeHall";
import SaveConfig from "../PanelItem/features/SaveConfig/SaveConfig";
import CharacteristicsHall from "./features/CharacteristicsHall/CharacteristicsHall";
import ConfigHallContainer from "./features/ConfigHallContainer/ConfigHallContainer";
import TypesOfChairs from "./features/TypesOfChairs/TypesOfChairs";


export default function HallsConfiguration({ halls }) {
    const [changedHall, setChangedHall] = useState(null)
    const [changeConfig, setChangeConfig] = useState({
        rows: '',
        places: '',
    })
    const [hallConfiguration, setHallConfiguration] = useState(null)

    const hall = halls.filter(hall => hall.hall_name === changedHall)[0]

    return (
        <div className="conf-step__wrapper">
            <ChangeHall halls={halls} setChangedHall={setChangedHall} />
            {
                hall &&
                <>
                    <CharacteristicsHall hall={hall} setChangeConfig={setChangeConfig} />
                    <TypesOfChairs />
                    <ConfigHallContainer hall={hall} changeConfig={changeConfig} setHallConfiguration={setHallConfiguration} />
                    <SaveConfig hall={{ hall, changeConfig, hallConfiguration }} />
                </>
            }

        </div>
    )
}