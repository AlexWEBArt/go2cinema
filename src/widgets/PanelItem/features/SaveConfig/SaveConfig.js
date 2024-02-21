import { useContext } from "react"
import { HallPriceContext } from "../../../../providers/HallConfigProvider/context/HallPriceProvider"
import { HallSchemeContext } from "../../../../providers/HallConfigProvider/context/HallSchemeProvider"
import { AppDataContext } from "../../../../providers/AppDataProvider/AppDataProvider"

export default function SaveConfig(props) {
    const { hall, component } = props

    const { hallPrice, setHallPrice } = useContext(HallPriceContext)
    const { hallScheme, setHallScheme, hallConfig, setHallConfig } = useContext(HallSchemeContext)
    const { setRequestData } = useContext(AppDataContext)

    const handleCancelConfig = (e) => {
        switch (component) {
            case 'HallsConfiguration':
                setHallScheme({
                    hall_places: '',
                    hall_rows: ''
                })
                setHallConfig({
                    hall_config: ''
                })
                return
            case 'CreateSessionsPrices':
                setHallPrice({
                    hall_price_standart: '',
                    hall_price_vip: ''
                })
                return
            default:
                return null
        }
    }

    const handleClickSaveConfig = async () => {


        let requestData = {
            hall_id: hall.hall_id,
            hall_name: hall.hall_name,
        }
        switch (component) {
            case 'HallsConfiguration':
                if (!hallScheme.hall_places || !hallScheme.hall_rows) {
                    const inputPlaces = document.querySelector('[name="hall_places"]')
                    const inputRows = document.querySelector('[name="hall_rows"]')
                    
                    if (!inputPlaces.values) inputPlaces.classList.add('invalid')
                    if (!inputRows.values) inputRows.classList.add('invalid')
                    return
                }
                requestData = {
                    ...requestData,
                    hall_config: hallConfig.hall_config.innerHTML,
                    hall_places: hallScheme.hall_places || hall.hall_places,
                    hall_rows: hallScheme.hall_rows || hall.hall_rows,
                }
                break
            case 'CreateSessionsPrices':
                if (!hallPrice.hall_price_standart || !hallPrice.hall_price_vip) return null
                requestData = {
                    ...requestData,
                    hall_price_standart: hallPrice.hall_price_standart,
                    hall_price_vip: hallPrice.hall_price_vip,
                };
                break
            case 'CreateSessions':
                requestData = {

                };
                break
            default:
                return null
        }
        const result = await fetch('https://go2cinema-backend.onrender.com/updateHall', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData)
        })
        if (result.ok) setRequestData(true)
    }

    return (
        <div className="conf-step__buttons text-center">
            <button className="conf-step__button conf-step__button-regular" onClick={handleCancelConfig}>Отмена</button>
            <input type="submit" value="Сохранить" className="conf-step__button conf-step__button-accent" onClick={handleClickSaveConfig} />
        </div>
    )
}