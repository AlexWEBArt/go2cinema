import BuyingScheme from "../../widgets/BuyingScheme/BuyingScheme";
import { useLocation } from 'react-router'

export default function HallPage({ data }) {
    const { state } = useLocation()

    if (!state && !data) {
        return (
            <div className="page">
                Sorry, wrong number!
            </div>
        )
    }

    const { films, halls, seances } = data

    console.log(state)

    return (
        <div className="page">
            <BuyingScheme halls={halls} filmSeance={state}  />
        </div>
    )
}