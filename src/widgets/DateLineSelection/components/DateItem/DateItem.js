import './date-item.css'

export default function DateItem({day}) {
    return (
        <a className="page-nav__day" href={day.href}>
            <span className="page-nav__day-week">
                {day.dayWeek}
            </span>
            <span className="page-nav__day-number">
                {day.dayNumber}
            </span>
        </a>
    )
}