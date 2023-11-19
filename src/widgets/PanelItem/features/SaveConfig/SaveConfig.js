export default function SaveConfig(props) {
    const { hall, hallConfiguration, changeConfig, setChangeConfig, setPrices, prices = null, seances = null } = props

    const handleCancelConfig = (e) => {
        // e.target.closest('popup').remove()
        if (hallConfiguration) {
            setChangeConfig({
                rows: '',
                places: '',
            })
        }
        if (prices) {
            setPrices({
                standart: '',
                vip: ''
            })
        }
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
        if (changeConfig) {
            requestData = {
                ...requestData,
                hall_config: hallConfiguration.innerHTML,
                hall_places: changeConfig.places,
                hall_row: changeConfig.rows,
            };
        }
        if (prices) {
            requestData = {
                ...requestData,
                hall_price_standart: prices.standart,
                hall_price_vip: prices.vip,
            };
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
        return await fetch('http://localhost:7070/updateHall', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData)
        })
    }

    return (
        <fieldset className="conf-step__buttons text-center">
            <button className="conf-step__button conf-step__button-regular" onClick={handleCancelConfig}>Отмена</button>
            <input type="submit" value="Сохранить" className="conf-step__button conf-step__button-accent" onClick={handleClickSaveConfig} />
        </fieldset>
    )
}