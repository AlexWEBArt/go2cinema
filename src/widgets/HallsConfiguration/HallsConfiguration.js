// import { v4 as uuidv4 } from "uuid"

import { useEffect, useRef, useState } from "react";
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

    const hallRef = useRef()

    const hall = halls.filter(hall => hall.hall_name === changedHall)[0]
    
    const [hallConfiguration, setHallConfiguration] = useState(null)

    useEffect(() => {
        if (changeConfig.rows && changeConfig.places) {
            return setHallConfiguration(hallRef.current)
        }
        setHallConfiguration(hall ? hall.hall_config.replace(/className/g, 'class') : null)
    }, [hall, changeConfig, hallRef.current])

    return (
        <div className="conf-step__wrapper">
            <ChangeHall halls={halls} setChangedHall={setChangedHall} />
            {
                hall &&
                <>
                    <CharacteristicsHall hall={hall} changeConfig={changeConfig} setChangeConfig={setChangeConfig} />
                    <TypesOfChairs />
                    <ConfigHallContainer hall={hall} changeConfig={changeConfig} setHallConfiguration={setHallConfiguration} hallConfiguration={hallConfiguration} hallRef={hallRef} />
                    <SaveConfig hall={hall} changeConfig={changeConfig} hallConfiguration={hallConfiguration} setChangeConfig={setChangeConfig}/>
                </>
            }

        </div>
    )
}