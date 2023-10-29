import { Link } from "react-router-dom";

export default function Booking() {

    return (
        <Link className="link" to={'/payment'}>
            <button 
                className="acceptin-button" 
                onСlick={() => null}
            >
                Забронировать
            </button>
        </Link>
    )
}