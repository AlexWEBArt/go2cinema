import { useEffect, useState } from "react";
import ChangeHall from "../PanelItem/features/ChangeHall/ChangeHall";

export default function OpenSession({ halls }) {
    const [changedHall, setChangedHall] = useState(null)
    const [isHallOpen, setIsHallOpen] = useState(false)

    useEffect(() => {
        if (changedHall) {
            setIsHallOpen(halls.filter(hall => changedHall === hall.hall_name)[0].hall_open)
        }
    }, [changedHall, halls, setIsHallOpen])

    const handleClickHallOpen = async () => {
        const requestData = {
            hall_id: halls.filter(hall => hall.hall_name === changedHall)[0].hall_id,
            hall_open: !isHallOpen
        }
        return await fetch('http://localhost:7070/updateHall', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData)
        })
    }

    return (
        <div className="conf-step__wrapper text-center">
            <ChangeHall halls={halls} setChangedHall={setChangedHall} />
            {changedHall &&
                <>
                    <p className="conf-step__paragraph">Всё готово, теперь можно:</p>
                    <button className="conf-step__button conf-step__button-accent" onClick={handleClickHallOpen}>
                        {
                            !isHallOpen ? 'Открыть продажу билетов' : 'Закрыть продажу билетов'
                        }
                    </button>
                </>
            }
        </div>
    )
}