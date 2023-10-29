// import { v4 as uuidv4 } from "uuid"
import HeaderPanelItem from "./features/HeaderPanelItem/HeaderPanelItem"

export default function PanelItem({step}) {


    return (
        <section className="conf-step">
            <HeaderPanelItem title={step.title}/>
            {step.widgets}
        </section>
    )
}