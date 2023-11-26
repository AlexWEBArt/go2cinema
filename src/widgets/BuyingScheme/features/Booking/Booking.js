import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Booking({seance, selectedChair}) {
    const [style, setStyle] = useState({pointerEvents: 'none'})

    useEffect(() => {
        if (selectedChair.length) {
            setStyle(null)
        } else {
            setStyle({pointerEvents: 'none'})
        }
    }, [selectedChair])

    return (
        <Link className="link" style={style} to={'/payment'} state={{
            seance,
            selectedChair
        }}>
            <button 
                className="acceptin-button" 
                onСlick={() => null}
            >
                Забронировать
            </button>
        </Link>
    )
}