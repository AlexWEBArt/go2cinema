import { useLocation } from "react-router";
import Ticket from "../../widgets/Ticket/Ticket";

export default function PaymentPage() {
    const { state } = useLocation()
    return (
        <div className="page">
            <Ticket from={'payment'} state={state}/>
        </div>
    )
}