export default function SetPrices() {

    // вносятся данные по количеству рядов и мест в каждом ряде передаються в глобальное состояние

    return (
        <>
            <p className="conf-step__paragraph">Установите цены для типов кресел:</p>
            <div className="conf-step__legend">
                <label className="conf-step__label">
                    Цена, рублей
                    <input type="text" className="conf-step__input" placeholder="0" />
                </label>
                за 
                <span className="conf-step__chair conf-step__chair_standart"></span>
                 обычные кресла
            </div>
            <div className="conf-step__legend">
                <label className="conf-step__label">
                    Цена, рублей
                    <input type="text" className="conf-step__input" placeholder="0" value="350" />
                </label>
                за 
                <span className="conf-step__chair conf-step__chair_vip"></span>
                 VIP кресла
            </div>
        </>
    )
}