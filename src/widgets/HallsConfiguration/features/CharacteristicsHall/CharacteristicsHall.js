

export default function CharacteristicsHall({hall, setChangeConfig}) {
    console.log(hall)
    // вносятся данные по количеству рядов и мест в каждом ряде передаються в глобальное состояние

    const handleChangeConfig = (e) => {
        const { name, value } = e.target;
        setChangeConfig(prevConfig => ({...prevConfig, [name]: value}));
    }

    return (
        <>
            <p className="conf-step__paragraph">
                Укажите количество рядов и максимальное количество кресел в ряду:
            </p>

            <div className="conf-step__legend">
                <label className="conf-step__label">Рядов, шт<input type="text" name="rows" className="conf-step__input" placeholder={hall.hall_row} onChange={handleChangeConfig}/></label>
                <span className="multiplier">x</span>
                <label className="conf-step__label">Мест, шт<input type="text" name="places" className="conf-step__input" placeholder={hall.hall_places} onchange={handleChangeConfig}/></label>
            </div>
        </>
    )
}