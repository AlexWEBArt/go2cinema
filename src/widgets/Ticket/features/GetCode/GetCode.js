import { Link } from "react-router-dom";

export default function GetCode() {

    return (
        <Link className="link" to={'/ticket'}>
            <button 
                className="acceptin-button" 
                onСlick={() => null}
            >
                Получить код бронирования
            </button>
        </Link>
    )
}