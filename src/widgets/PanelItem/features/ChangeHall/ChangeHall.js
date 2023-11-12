import { v4 as uuidv4 } from "uuid"

export default function ChangeHall({halls, setChangedHall}) {
    const handlerChangeHall = (e) => {
        const { target } = e
        const parent = target.closest('li')
        // console.log(parent.querySelector('.conf-step__selector').innerHTML)
        setChangedHall(parent.querySelector('.conf-step__selector').innerHTML)
    }

    const renderHallsListItem = (hall) => {
        return (
            <li key={uuidv4()}>
                <input type="radio" className="conf-step__radio" name="chairs-hall" value={hall.hall_name} onChange={handlerChangeHall}/>
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
                {halls.map(hall => renderHallsListItem(hall))}
            </ul>
        </>
    )
}