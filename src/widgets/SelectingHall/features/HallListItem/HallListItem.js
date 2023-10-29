export default function HallListItem({hall}) {


    return (
        <li>{hall.hallName}
            <button className="conf-step__button conf-step__button-trash"></button>
        </li>
    )
}