import { useState } from "react";
import ChangeHall from "../PanelItem/features/ChangeHall/ChangeHall";
import SaveConfig from "../PanelItem/features/SaveConfig/SaveConfig";
import SetPrices from "./features/SetPrices/SetPrices";

export default function CreateSessionsPrices({ halls }) {
    const [changedHall, setChangedHall] = useState(null)
    const hall = halls.filter(hall => hall.hall_name === changedHall)[0]

    return (
        <div className="conf-step__wrapper">
            <ChangeHall halls={halls} setChangedHall={setChangedHall}/>
            <SetPrices hall={hall} />
            <SaveConfig hall={hall} component={'CreateSessionsPrices'} />
        </div>
    )
}