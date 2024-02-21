import { Link } from "react-router-dom";

export default function P404() {
    return (
        <div className="page">
            <p className="error-404">Извините, такой страницы не существует...</p>
            <div className="conf-step__buttons btn-404">
                <Link to={'/'} className="conf-step__button conf-step__button-regular link">
                    Вернуться на главную
                </Link>
            </div>
        </div>
    )
}