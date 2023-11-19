import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

export default function ChangeHall({halls, setChangedHall}) {
    const [checkedHall, setCheckedHall] = useState('')
    const handlerChangeHall = (e) => {
        const { target } = e
        // const parent = target.closest('li')
        // console.log(parent.querySelector('.conf-step__selector').innerHTML)
        // const checkBox = parent.querySelector('.conf-step__radio')
        // checkBox.defaultValue = true
        // console.log({checkBox})
        // setChecked(!checked)
        // setChangedHall(parent.querySelector('.conf-step__selector').innerHTML)
        

        // const selectedHallName = target.value;

        // Обновляем состояние выбранного зала
        setCheckedHall(target.value);
    
        // Оповещаем родительский компонент о выборе зала
        setChangedHall(target.value);
    }

    const renderHallsListItem = (hall) => {
        // let isCheck = !index ? true : false
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