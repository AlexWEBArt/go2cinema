import ChangeHall from "../PanelItem/features/ChangeHall/ChangeHall";
import SaveConfig from "../PanelItem/features/SaveConfig/SaveConfig";
import SetPrices from "./features/SetPrices/SetPrices";

export default function CreateSessionsPrices({ halls }) {


    return (
        <div className="conf-step__wrapper">
            <ChangeHall halls={halls} />
            <SetPrices />
            <SaveConfig />
        </div>
    )
}