import { useContext } from "react";
import Ticket from "../../widgets/Ticket/Ticket";
import { ClientContext } from "../../providers/ClientProvider/ClientProvider";
import { AppDataContext } from "../../providers/AppDataProvider/AppDataProvider";

export default function TicketPage() {
    const { selectedSession, selectedPlaces } = useContext(ClientContext)
    const { setRequestData } = useContext(AppDataContext)

    return (
        <main className="page">
            <Ticket from={'ticket'} selectedSession={selectedSession} selectedPlaces={selectedPlaces} setRequestData={setRequestData}/>
        </main>
    )
}