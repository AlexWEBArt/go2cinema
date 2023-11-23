import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

export default function ChangeHall({halls, setChangedHall}) {
    const [checkedHall, setCheckedHall] = useState('')
    const handlerChangeHall = (e) => {
        const { target } = e

        setCheckedHall(target.value);

        setChangedHall(target.value);
    }

    const renderHallsListItem = (hall) => {
        return (
            <li key={uuidv4()}>
                <input type="radio" className="conf-step__radio" name="chairs-hall" value={hall.hall_name} onChange={handlerChangeHall} checked={checkedHall === hall.hall_name}/>
                <span className="conf-step__selector">
                    {hall.hall_name}
                </span>
            </li>
        )
    }

    return (
        <>
            <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
            <ul className="conf-step__selectors-box">
                {halls.map((hall) => renderHallsListItem(hall))}
            </ul>
        </>
    )
}