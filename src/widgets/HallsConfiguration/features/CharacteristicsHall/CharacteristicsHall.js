export default function CharacteristicsHall() {

    // вносятся данные по количеству рядов и мест в каждом ряде передаються в глобальное состояние

    return (
        <>
            <p className="conf-step__paragraph">
                Укажите количество рядов и максимальное количество кресел в ряду:
            </p>

            <div className="conf-step__legend">
                <label className="conf-step__label">Рядов, шт<input type="text" className="conf-step__input" placeholder="10" /></label>
                <span className="multiplier">x</span>
                <label className="conf-step__label">Мест, шт<input type="text" className="conf-step__input" placeholder="8" /></label>
            </div>
        </>
    )
}