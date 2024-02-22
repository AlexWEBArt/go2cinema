import { useContext } from "react";
import BuyingScheme from "../../widgets/BuyingScheme/BuyingScheme";
import { ClientContext } from "../../providers/ClientProvider/ClientProvider";

export default function HallPage({ data }) {

    const { selectedSession, setSelectedPlaces } = useContext(ClientContext)
    const { halls } = data

    return (
        <main className="page">
            <BuyingScheme halls={halls} filmSeance={selectedSession} setSelectedPlaces={setSelectedPlaces} />
        </main>
    )
}