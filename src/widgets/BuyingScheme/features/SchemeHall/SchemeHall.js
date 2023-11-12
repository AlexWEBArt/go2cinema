import { useRef, useState } from "react"

export default function SchemeHall({ hall, setSelectedChairs }) {
    // const [selectedChairs, setSelectedChairs] = useState(null)
    // const {hall_places, hall_row} = hall
    const hallConfig = hall.hall_config.replace(/conf-step/g, 'buying-scheme').replace(/className/g, 'class')
    console.log(hall)

    const hallRef = useRef()

    const handleSelectedChair = (e) => {
        const { target } = e
        if (target.classList.contains('buying-scheme__chair_standart') || target.classList.contains('buying-scheme__chair_vip')) {
            target.classList.toggle('buying-scheme__chair_selected')
            setSelectedChairs(findSelectedChairsPositions(hallRef))
        }
        // if (target.classList.contains('buying-scheme__chair_standart')) {
        //     target.classList.add('buying-scheme__chair_selected')
        //     target.classList.remove('buying-scheme__chair_standart')
        // } else if (target.classList.contains('buying-scheme__chair_selected')) {
        //     target.classList.add('buying-scheme__chair_standart')
        //     target.classList.remove('buying-scheme__chair_selected')
        // }
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

    // const renderPlaces = (row) => {

    //     return Array.from({ length: hall_places }, (_, placeIdx) => (
    //         <span key={placeIdx} className="buying-scheme__chair buying-scheme__chair_standart" onClick={(e) => handleSelectedChair(e)}></span>
    //       ))
    // }

    // const renderRow = () => {
    //     return Array.from({ length: hall_row }, (_, rowIdx) => (
    //         <div key={rowIdx} className="buying-scheme__row">
    //           {renderPlaces(rowIdx)}
    //         </div>
    //     ));
    // }



    return (
        <div
            className="buying-scheme__wrapper"
            ref={hallRef}
            dangerouslySetInnerHTML={{ __html: hallConfig }} onClick={handleSelectedChair}
        >
            {/* {renderRow()} */}

        </div>

    )
}