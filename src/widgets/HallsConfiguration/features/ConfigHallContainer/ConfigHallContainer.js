import { useRef } from "react"

export default function ConfigHallContainer({ hall }) {
    const hallRef = useRef()

    const hallConfig = hall.hall_config.replace(/className/g, 'class')

    const handleSelectedChair = (e) => {
        const { target } = e
        if (target.classList.contains('conf-step__chair_standart') || target.classList.contains('conf-step__chair_vip')) {
            target.classList.toggle('conf-step__chair_selected')
            // setSelectedChairs(findSelectedChairsPositions(hallRef))
        }
        // if (target.classList.contains('buying-scheme__chair_standart')) {
        //     target.classList.add('buying-scheme__chair_selected')
        //     target.classList.remove('buying-scheme__chair_standart')
        // } else if (target.classList.contains('buying-scheme__chair_selected')) {
        //     target.classList.add('buying-scheme__chair_standart')
        //     target.classList.remove('buying-scheme__chair_selected')
        // }
    }

    // взять данные из глобального состояния о количесте рядов
    // row * <div className="conf-step__row"></div>

    // взять данные из глобального состояния о количесте мест в ряде и их типах
    // place(type) * <span className="conf-step__chair ${type}"></span>

    return (
        <div className="conf-step__hall"

        // onClick={handleSelectedChair}
        >
            <div className="conf-step__hall-wrapper"
                ref={hallRef}
                dangerouslySetInnerHTML={{ __html: hallConfig }}
                onClick={handleSelectedChair}
            >

            </div>
            {/* <div className="conf-step__hall-wrapper">
                <div className="conf-step__row">
                    <span className="conf-step__chair conf-step__chair_disabled"></span><span className="conf-step__chair conf-step__chair_disabled"></span>
                    <span className="conf-step__chair conf-step__chair_disabled"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_disabled"></span>
                    <span className="conf-step__chair conf-step__chair_disabled"></span><span className="conf-step__chair conf-step__chair_disabled"></span>
                </div>

                <div className="conf-step__row">
                    <span className="conf-step__chair conf-step__chair_disabled"></span><span className="conf-step__chair conf-step__chair_disabled"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_disabled"></span><span className="conf-step__chair conf-step__chair_disabled"></span>
                </div>

                <div className="conf-step__row">
                    <span className="conf-step__chair conf-step__chair_disabled"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_disabled"></span>
                </div>

                <div className="conf-step__row">
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_vip"></span>
                    <span className="conf-step__chair conf-step__chair_vip"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_disabled"></span>
                </div>

                <div className="conf-step__row">
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_vip"></span><span className="conf-step__chair conf-step__chair_vip"></span>
                    <span className="conf-step__chair conf-step__chair_vip"></span><span className="conf-step__chair conf-step__chair_vip"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_disabled"></span>
                </div>

                <div className="conf-step__row">
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_vip"></span><span className="conf-step__chair conf-step__chair_vip"></span>
                    <span className="conf-step__chair conf-step__chair_vip"></span><span className="conf-step__chair conf-step__chair_vip"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_disabled"></span>
                </div>

                <div className="conf-step__row">
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_vip"></span><span className="conf-step__chair conf-step__chair_vip"></span>
                    <span className="conf-step__chair conf-step__chair_vip"></span><span className="conf-step__chair conf-step__chair_vip"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_disabled"></span>
                </div>

                <div className="conf-step__row">
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_disabled"></span>
                </div>

                <div className="conf-step__row">
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                </div>

                <div className="conf-step__row">
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                </div>
            </div> */}
        </div>
    )
}