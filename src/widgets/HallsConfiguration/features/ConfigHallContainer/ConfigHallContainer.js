import { useContext, useEffect, useRef } from "react"
import { v4 as uuidv4 } from "uuid"
import { HallSchemeContext } from "../../../../providers/HallConfigProvider/context/HallSchemeProvider"

export default function ConfigHallContainer({ hall }) {
    const { hallScheme, setHallConfig } = useContext(HallSchemeContext)

    const hallRef = useRef()

    useEffect(() => {
        setHallConfig({hall_config: hallRef.current})
    }, [hallRef, setHallConfig])

    const handleSelectedChair = (e) => {
        const { target } = e
        // использовать библиотеку ClassNames
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
    }

    const renderHall = (config) => {
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
        return (
            Array.from({ length: config.places }).map(() => {
                return (
                    <span key={uuidv4()} className="conf-step__chair conf-step__chair_standart"></span>
                )
            })
        )
    }
    
    return (
        <div className="conf-step__hall"
            onClick={handleSelectedChair}
        >
            {
                !hall.hall_config || (hallScheme.hall_rows && hallScheme.hall_places) ?
                    <div className="conf-step__hall-wrapper"
                        ref={hallRef}
                    >
                        {renderHall({rows: hallScheme.hall_rows, places: hallScheme.hall_places})}
                    </div>
                    :
                    <div className="conf-step__hall-wrapper"
                        ref={hallRef}
                        dangerouslySetInnerHTML={{ __html: hall?.hall_config.replace(/className/g, 'class') }}
                    />
            }
        </div>
    )
}