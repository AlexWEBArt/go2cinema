import { v4 as uuidv4 } from "uuid"

export default function ChangeHall({halls}) {

    const renderHallsListItem = (hall) => {
        return (
            <li key={uuidv4()}>
                <input type="radio" className="conf-step__radio" name="chairs-hall" value={hall.hallName} checked />
                <span className="conf-step__selector">
                    {hall.hallName}
                </span>
            </li>
        )
    }

    return (
        <>
            <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
            <ul className="conf-step__selectors-box">
                {halls.map(hall => renderHallsListItem(hall))}
            </ul>
        </>
    )
}