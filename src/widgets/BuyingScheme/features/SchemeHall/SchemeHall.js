import { useRef } from "react"

export default function SchemeHall({ hall, setSelectedChairs }) {
    const hallConfig = hall.hall_config.replace(/conf-step/g, 'buying-scheme').replace(/className/g, 'class')

    const hallRef = useRef()

    const handleSelectedChair = (e) => {
        const { target } = e
        if (target.classList.contains('buying-scheme__chair_standart') || target.classList.contains('buying-scheme__chair_vip')) {
            target.classList.toggle('buying-scheme__chair_selected')
            setSelectedChairs(findSelectedChairsPositions(hallRef))
        }
    }

    const findSelectedChairsPositions = (ref) => {
        const selectedChairs = ref.current.querySelectorAll(".buying-scheme__chair_selected");
        const positions = [];

        selectedChairs.forEach((chair) => {
            const rowElement = chair.closest(".buying-scheme__row");
            const row = Array.from(rowElement.parentNode.children).indexOf(rowElement) + 1;
            const place = Array.from(rowElement.children).indexOf(chair) + 1;
            const cost = chair.classList.contains('buying-scheme__chair_vip') ? hall.hall_price_vip : hall.hall_price_standart
            positions.push({ row, place, cost });
        });

        return positions;
    }

    return (
        <div
            className="buying-scheme__wrapper"
            ref={hallRef}
            dangerouslySetInnerHTML={{ __html: hallConfig }} onClick={handleSelectedChair}
        >
        </div>

    )
}