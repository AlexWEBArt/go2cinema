export default function HallListItem({hall}) {

    const handleRemoveHall = (e) => {
        const { target } = e

    }

    return (
        <li>
            {hall.hall_name}
            <button className="conf-step__button conf-step__button-trash" onClick={handleRemoveHall}></button>
        </li>
    )
}