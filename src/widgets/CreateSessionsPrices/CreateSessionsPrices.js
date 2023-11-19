import { useEffect, useState } from "react";
import ChangeHall from "../PanelItem/features/ChangeHall/ChangeHall";
import SaveConfig from "../PanelItem/features/SaveConfig/SaveConfig";
import SetPrices from "./features/SetPrices/SetPrices";

export default function CreateSessionsPrices({ halls }) {
    const [changedHall, setChangedHall] = useState(null)
    const hall = halls.filter(hall => hall.hall_name === changedHall)[0]

    const [prices, setPrices] = useState({
        standart: '',
        vip: ''
    })
    // console.log(hall.hall_price_standart.toString())
    
    // useEffect(() => {
    //     if (hall) {
    //         setPrices({standart: hall.hall_price_standart, vip: hall.hall_price_vip})
    //     }
    // }, [prices])

    return (
        <div className="conf-step__wrapper">
            <ChangeHall halls={halls} setChangedHall={setChangedHall}/>
            <SetPrices hall={hall} prices={prices} setPrices={setPrices}/>
            <SaveConfig hall={hall} prices={prices} setPrices={setPrices}/>
        </div>
    )
}