export default function SaveConfig({hall, prices = null}) {

    const handleCancelConfig = (e) => [
        // e.target.closest('popup').remove()
    ]

    const handleClickSaveConfig = async () => {
        const requestData = {
            hall_name: hall,
            prices
        }
        // return await fetch('http://localhost:7070/saveHallConfig', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(requestData)
        // })
    }

    return (
        <fieldset className="conf-step__buttons text-center">
            <button className="conf-step__button conf-step__button-regular" onClick={handleCancelConfig}>Отмена</button>
            <input type="submit" value="Сохранить" className="conf-step__button conf-step__button-accent" onClick={handleClickSaveConfig}/>
        </fieldset>
    )
}