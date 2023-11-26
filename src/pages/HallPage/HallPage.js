import { useContext } from "react";
import BuyingScheme from "../../widgets/BuyingScheme/BuyingScheme";
import { useLocation } from 'react-router'
import { ClientContext } from "../../providers/ClientProvider/ClientProvider";

export default function HallPage({ data }) {
    const { state } = useLocation()
    const { selectedSession } = useContext(ClientContext)
    console.log(selectedSession)
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
            <BuyingScheme halls={halls} filmSeance={selectedSession}  />
        </div>
    )
}