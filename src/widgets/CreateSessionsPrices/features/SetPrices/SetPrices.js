export default function SetPrices({setPrices}) {

    const handleSetPrice = (e) => {
        const { name, value } = e.target;
        setPrices(prevConfig => ({...prevConfig, [name]: value}));
    }

    // вносятся данные по количеству рядов и мест в каждом ряде передаються в глобальное состояние

    return (
        <>
            <p className="conf-step__paragraph">Установите цены для типов кресел:</p>
            <div className="conf-step__legend">
                <label className="conf-step__label">
                    Цена, рублей
                    <input type="text" name="standart" className="conf-step__input" placeholder="0" onChange={handleSetPrice}/>
                </label>
                за 
                <span className="conf-step__chair conf-step__chair_standart"></span>
                 обычные кресла
            </div>
            <div className="conf-step__legend">
                <label className="conf-step__label">
                    Цена, рублей
                    <input type="text" name="vip" className="conf-step__input" placeholder="0" value="350" onChange={handleSetPrice} />
                </label>
                за 
                <span className="conf-step__chair conf-step__chair_vip"></span>
                 VIP кресла
            </div>
        </>
    )
}