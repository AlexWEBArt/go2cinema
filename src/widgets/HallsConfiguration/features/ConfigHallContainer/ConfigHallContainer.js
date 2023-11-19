import { useEffect, useRef, useState } from "react"
import { v4 as uuidv4 } from "uuid"

export default function ConfigHallContainer({ hall, changeConfig, setHallConfiguration, hallConfiguration, hallRef }) {
    // const [hallConfig, setHallConfig] = useState(hall.hall_config.replace(/className/g, 'class'))
    // const hallRef = useRef()
    // console.log(changeConfig)
    // useEffect(() => {
    //     if (changeConfig.rows && changeConfig.places) {
    //         setHallConfig(null)
    //     }
    //     setHallConfiguration(hallRef.current)
    // }, [changeConfig, hallRef.current])

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
            Array.from({ length: config.rows }).map(() => {
                return (
                    <div key={uuidv4()} className="conf-step__row">
                        {renderRow(config)}
                    </div>
                )
            })
        )
    }

    const renderRow = (config) => {
        console.log(config)
        return (
            Array.from({ length: config.places }).map(() => {
                return (
                    <span key={uuidv4()} className="conf-step__chair conf-step__chair_standart"></span>
                )
            })
        )
    }
    console.log(changeConfig)
    // взять данные из глобального состояния о количесте рядов
    // row * <div className="conf-step__row"></div>

    // взять данные из глобального состояния о количесте мест в ряде и их типах
    // place(type) * <span className="conf-step__chair ${type}"></span>

    return (
        <div className="conf-step__hall"

            onClick={handleSelectedChair}
        >
            {
                (changeConfig.rows && changeConfig.places) ?
                    <div className="conf-step__hall-wrapper"
                        ref={hallRef}
                    >
                        {renderHall(changeConfig)}
                    </div>
                    :
                    <div className="conf-step__hall-wrapper"
                        ref={hallRef}
                        dangerouslySetInnerHTML={{ __html: hallConfiguration }}
                    />
            }
        </div>
    )
}