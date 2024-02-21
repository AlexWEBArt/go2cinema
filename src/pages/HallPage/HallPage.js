import { useContext } from "react";
import BuyingScheme from "../../widgets/BuyingScheme/BuyingScheme";
import { ClientContext } from "../../providers/ClientProvider/ClientProvider";

export default function HallPage({ data }) {

    const { selectedSession, setSelectedPlaces } = useContext(ClientContext)

    // if (!state && !data) {
    //     return (
    //         <div className="page">
    //             Sorry, wrong number!
    //         </div>
    //     )
    // }

    const { halls } = data

    return (
        <main className="page">
            <BuyingScheme halls={halls} filmSeance={selectedSession} setSelectedPlaces={setSelectedPlaces} />
        </main>
    )
}