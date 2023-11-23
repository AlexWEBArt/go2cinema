import { useContext } from "react";
import { HallPriceContext } from "../../../../providers/HallConfigProvider/context/HallPriceProvider";

export default function SetPrices({hall, prices, setPrices}) {
    const { hallPrice ,setHallPrice } = useContext(HallPriceContext)
    const handleSetPrice = (e) => {
        const { name, value } = e.target;
        setHallPrice(prevConfig => ({...prevConfig, [name]: value}));
    }

    // вносятся данные по количеству рядов и мест в каждом ряде передаються в глобальное состояние

    return (
        <>
            <p className="conf-step__paragraph">Установите цены для типов кресел:</p>
            <div className="conf-step__legend">
                <label className="conf-step__label">
                    Цена, рублей
                    <input type="text" name="hall_price_standart" className="conf-step__input" placeholder={hall?.hall_price_standart} value={hallPrice.hall_price_standart ? hallPrice.hall_price_standart : ''} onChange={handleSetPrice}/>
                </label>
                за 
                <span className="conf-step__chair conf-step__chair_standart"></span>
                 обычные кресла
            </div>
            <div className="conf-step__legend">
                <label className="conf-step__label">
                    Цена, рублей
                    <input type="text" name="hall_price_vip" className="conf-step__input" placeholder={hall?.hall_price_vip} value={hallPrice.hall_price_vip ? hallPrice.hall_price_vip : ''} onChange={handleSetPrice} />
                </label>
                за 
                <span className="conf-step__chair conf-step__chair_vip"></span>
                 VIP кресла
            </div>
        </>
    )
}