// import { v4 as uuidv4 } from "uuid"

import ChangeHall from "../PanelItem/features/ChangeHall/ChangeHall";
import SaveConfig from "../PanelItem/features/SaveConfig/SaveConfig";
import CharacteristicsHall from "./features/CharacteristicsHall/CharacteristicsHall";
import ConfigHallContainer from "./features/ConfigHallContainer/ConfigHallContainer";
import TypesOfChairs from "./features/TypesOfChairs/TypesOfChairs";


export default function HallsConfiguration({ halls }) {


    return (
        <div className="conf-step__wrapper">
            <ChangeHall halls={halls} />
            <CharacteristicsHall />
            <TypesOfChairs />
            <ConfigHallContainer />
            <SaveConfig />
        </div>
    )
}