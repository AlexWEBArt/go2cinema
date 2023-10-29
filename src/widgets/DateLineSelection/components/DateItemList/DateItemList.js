import DateItem from "../DateItem/DateItem"
import { v4 as uuidv4 } from "uuid"

export default function DateItemList() {
    const data = [
        {
            href: '#',
            dayWeek: 'Пн',
            dayNumber: '31'
        },
        {
            href: '#',
            dayWeek: 'Вт',
            dayNumber: '01'
        },
        {
            href: '#',
            dayWeek: 'Ср',
            dayNumber: '02'
        },
        {
            href: '#',
            dayWeek: 'Чт',
            dayNumber: '03'
        },
        {
            href: '#',
            dayWeek: 'Пт',
            dayNumber: '04'
        },
        {
            href: '#',
            dayWeek: 'Сб',
            dayNumber: '05'
        },
        {
            href: '#',
            dayWeek: 'Вс',
            dayNumber: '06'
        },
    ]
    return (
        <>
            {data.map(item => <DateItem key={uuidv4()} day={item}/>)}
        </>
    )
}