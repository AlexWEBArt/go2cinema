// import Logo from "../../root/Logo/Logo";
// import Main from "../../root/Main/Main";

import AvalibleSessionsFilm from "../../widgets/AvalibleSessionsFilm/AvalibleSessionsFilm";
import DateLineSelection from "../../widgets/DateLineSelection/DateLineSelection";

export default function HomePage() {
    return (
        <div className="page">
            <DateLineSelection />
            <AvalibleSessionsFilm />
        </div>
    )
}