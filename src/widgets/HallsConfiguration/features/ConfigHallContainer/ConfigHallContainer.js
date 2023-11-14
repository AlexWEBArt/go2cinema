import { useEffect, useRef } from "react"

export default function ConfigHallContainer({ hall, changeConfig, setHallConfiguration }) {
    const hallRef = useRef()

    useEffect(() => {
        setHallConfiguration(hallRef.current)
    }, [hallRef.current])

    const hallConfig = hall.hall_config.replace(/className/g, 'class')

    const handleSelectedChair = (e) => {
        const { target } = e
        if (target.classList.contains('conf-step__chair_standart')) {
            target.classList.add('conf-step__chair_vip')
            target.classList.remove('conf-step__chair_standart')
            return
        }
        if (target.classList.contains('conf-step__chair_vip')) {
            target.classList.add('conf-step__chair_disabled')
            target.classList.remove('conf-step__chair_vip')
            return
        }
        if (target.classList.contains('conf-step__chair_disabled')) {
            target.classList.add('conf-step__chair_standart')
            target.classList.remove('conf-step__chair_disabled')
            return
        }
        // if (target.classList.contains('buying-scheme__chair_standart')) {
        //     target.classList.add('buying-scheme__chair_selected')
        //     target.classList.remove('buying-scheme__chair_standart')
        // } else if (target.classList.contains('buying-scheme__chair_selected')) {
        //     target.classList.add('buying-scheme__chair_standart')
        //     target.classList.remove('buying-scheme__chair_selected')
        // }
    }

    const renderHall = (config) => {
        if (!config.rows && !config.places) return null
        return (
            config.rows.map(() => {
                return (
                    <div className="conf-step__row">
                        {renderRow(config)}
                    </div>
                )
            })
        )
    }

    const renderRow = (config) => {
        return (
            config.places.map(() => {
                return (
                    <span className="conf-step__chair conf-step__chair_standart"></span>
                )
            })
        )
    }

    // взять данные из глобального состояния о количесте рядов
    // row * <div className="conf-step__row"></div>

    // взять данные из глобального состояния о количесте мест в ряде и их типах
    // place(type) * <span className="conf-step__chair ${type}"></span>

    return (
        <div className="conf-step__hall"

            onClick={handleSelectedChair}
        >
            {
                hallConfig ?
                <div className="conf-step__hall-wrapper"
                    ref={hallRef}
                    dangerouslySetInnerHTML={{ __html: hallConfig }}
                />
                :
                <div className="conf-step__hall-wrapper"
                    ref={hallRef}
                >
                    {renderHall(changeConfig)}
                </div>
            }
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