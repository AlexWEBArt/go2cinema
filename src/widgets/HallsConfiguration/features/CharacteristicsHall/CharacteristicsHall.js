import { useContext } from "react";
import { HallSchemeContext } from "../../../../providers/HallConfigProvider/context/HallSchemeProvider";


export default function CharacteristicsHall({ hall }) {
    const { hallScheme, setHallScheme } = useContext(HallSchemeContext)

    const handleChangeConfig = (e) => {
        const { name, value } = e.target;
        // if (value < 2) return setHallScheme(prevConfig => ({ ...prevConfig, [name]: '2' }));

        setHallScheme(prevConfig => ({ ...prevConfig, [name]: value }));
        e.target.classList.remove('invalid')
    }

    return (
        <>
            <p className="conf-step__paragraph">
                Укажите количество рядов и максимальное количество кресел в ряду:
            </p>

            <div className="conf-step__legend">
                <label className="conf-step__label">
                    Рядов, шт
                    <input type="text" name="hall_rows" className="conf-step__input" placeholder={hall?.hall_rows} value={hallScheme.hall_rows} onChange={handleChangeConfig} />
                </label>
                <span className="multiplier">x</span>
                <label className="conf-step__label">
                    Мест, шт
                    <input type="text" name="hall_places" className="conf-step__input" placeholder={hall?.hall_places} value={hallScheme.hall_places} onChange={handleChangeConfig} />
                </label>
            </div>
        </>
    )
}