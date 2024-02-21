import { Link } from "react-router-dom";

export default function GetCode({selectedSession, selectedPlaces}) {

    const { seanceConfig } = selectedPlaces[0]
    console.log(seanceConfig)

    const requstData = {seance_id: selectedSession.seanceId, seance_config: seanceConfig.innerHTML.replace(/selected/g, 'taken')}
    const handleClickGetCode = async () => {
        await fetch('https://go2cinema-backend.onrender.com/updateSeanceConfig', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requstData)
        })   
    }

    return (
        <Link className="link" to={'/ticket'}>
            <button 
                className="acceptin-button"
                onClick={handleClickGetCode}
            >
                Получить код бронирования
            </button>
        </Link>
    )
}