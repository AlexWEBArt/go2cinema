import { useContext } from "react"
import { HallPriceContext } from "../../../../providers/HallConfigProvider/context/HallPriceProvider"
import { HallSchemeContext } from "../../../../providers/HallConfigProvider/context/HallSchemeProvider"
import { AppDataContext } from "../../../../providers/AppDataProvider/AppDataProvider"

export default function SaveConfig(props) {
    const { hall, component, hallConfiguration, changeConfig, setChangeConfig, setPrices, prices = null, seances = null } = props

    const { hallPrice, setHallPrice } = useContext(HallPriceContext)
    const { hallScheme, setHallScheme, hallConfig, setHallConfig, request, setRequest } = useContext(HallSchemeContext)
    const { setRequestData } = useContext(AppDataContext)
    // const { hallPrice, setHallPrice } = useContext(HallPriceContext)

    const handleCancelConfig = (e) => {
        // e.target.closest('popup').remove()
        switch (component) {
            case 'HallsConfiguration':
                setHallScheme({
                    hall_places: '2',
                    hall_rows: '2'
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
        // if (hallConfiguration) {
        //     setChangeConfig({
        //         rows: '',
        //         places: '',
        //     })
        // }
        // if (prices) {
        //     setPrices({
        //         standart: '',
        //         vip: ''
        //     })
        // }
    }

    const handleClickSaveConfig = async () => {


        let requestData = {
            hall_id: hall.hall_id,
            hall_name: hall.hall_name,
            // hall_price_standart: prices?.standart,
            // hall_price_vip: prices?.vip,
            // hall_config: hallConfiguration,
            // hall_places: changeConfig?.places,
            // hall_rows: changeConfig?.rows,
        }
        switch (component) {
            case 'HallsConfiguration':
                if (hallConfig.hall_config && (hallScheme.hall_places === '2' || hallScheme.hall_rows === '2')) {
                    requestData = {
                        ...requestData,
                        hall_config: hallConfig.hall_config.innerHTML,
                        hall_places: hall.hall_places,
                        hall_rows: hall.hall_rows,
                    }
                    break
                }
                requestData = {
                    ...requestData,
                    hall_config: hallConfig.hall_config.innerHTML,
                    hall_places: hallScheme.hall_places,
                    hall_rows: hallScheme.hall_rows,
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
                // if (!hallPrice.hall_price_standart || !hallPrice.hall_price_vip) return null
                requestData = {

                };
                break
            default:
                return null
        }
        if (seances) {
            // return await fetch('http://localhost:7070/updateHall', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(requestData)
            // })
        }
        console.log(requestData)
        const result = await fetch('http://localhost:7070/updateHall', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData)
        })
        if (result.ok) setRequestData(true)
    }

    return (
        <fieldset className="conf-step__buttons text-center">
            <button className="conf-step__button conf-step__button-regular" onClick={handleCancelConfig}>Отмена</button>
            <input type="submit" value="Сохранить" className="conf-step__button conf-step__button-accent" onClick={handleClickSaveConfig} />
        </fieldset>
    )
}