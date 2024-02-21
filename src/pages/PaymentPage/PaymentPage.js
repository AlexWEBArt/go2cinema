import Ticket from "../../widgets/Ticket/Ticket";
import { ClientContext } from "../../providers/ClientProvider/ClientProvider";
import { useContext } from "react";

export default function PaymentPage() {
    const { selectedSession, selectedPlaces } = useContext(ClientContext)

    return (
        <main className="page">
            <Ticket from={'payment'} selectedSession={selectedSession} selectedPlaces={selectedPlaces}/>
        </main>
    )
}