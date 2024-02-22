import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Booking({selectedChair}) {
    const [style, setStyle] = useState({pointerEvents: 'none', background: '#d5d5d5'})

    useEffect(() => {
        if (selectedChair.length) {
            setStyle(null)
        } else {
            setStyle({pointerEvents: 'none', background: '#d5d5d5'})
        }
    }, [selectedChair])

    return (
        <Link className="link" style={style} to={'/go2cinema/payment'}>
            <button className="acceptin-button" style={style}>
                Забронировать
            </button>
        </Link>
    )
}