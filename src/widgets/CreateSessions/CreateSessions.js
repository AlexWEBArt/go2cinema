import { useState } from "react";
import SaveConfig from "../PanelItem/features/SaveConfig/SaveConfig";
import AddFilm from "./features/AddFilm/AddFilm";
import FilmsList from "./features/FilmsList/FilmsList";
import HallsTimeLineList from "./features/HallsTimeLineList/HallsTimeLineList";

export default function CreateSessions({ data, filmsList,  setCallModal }) {
    const [dragedFilm, setDragedFilm] = useState(null)
    console.log(filmsList)

    const hallsSeances = [
        {
            hallName: 'Зал 1',
            seances: [
                {
                    seancesTitle: 'Хищник',
                    startSeances: '03:00',
                },
                {
                    seancesTitle: 'Хищник',
                    startSeances: '08:20',
                },
                {
                    seancesTitle: 'Звёздные войны XXIII: Атака клонированных клонов',
                    startSeances: '10:20',
                },
                {
                    seancesTitle: 'Альфа',
                    startSeances: '12:10',
                },
                {
                    seancesTitle: 'Звёздные войны XXIII: Атака клонированных клонов',
                    startSeances: '14:10',
                },
                {
                    seancesTitle: 'Альфа',
                    startSeances: '16:20',
                },
                {
                    seancesTitle: 'Звёздные войны XXIII: Атака клонированных клонов',
                    startSeances: '18:40',
                },
                {
                    seancesTitle: 'Звёздные войны XXIII: Атака клонированных клонов',
                    startSeances: '22:00',
                },
            ]
        },
        {
            hallName: 'Зал 2',
            seances: [
                {
                    seancesTitle: 'Хищник',
                    startSeances: '02:00',
                },
                {
                    seancesTitle: 'Хищник',
                    startSeances: '04:30',
                },
                {
                    seancesTitle: 'Звёздные войны XXIII: Атака клонированных клонов',
                    startSeances: '11:15',
                },
                {
                    seancesTitle: 'Альфа',
                    startSeances: '13:25',
                },
                {
                    seancesTitle: 'Звёздные войны XXIII: Атака клонированных клонов',
                    startSeances: '15:00',
                },
                {
                    seancesTitle: 'Альфа',
                    startSeances: '17:40',
                },
                {
                    seancesTitle: 'Звёздные войны XXIII: Атака клонированных клонов',
                    startSeances: '19:20',
                },
                {
                    seancesTitle: 'Хищник',
                    startSeances: '21:30',
                },
                {
                    seancesTitle: 'Звёздные войны XXIII: Атака клонированных клонов',
                    startSeances: '23:30',
                },
            ]
        }
    ]

    return (
        <div className="conf-step__wrapper">
            <AddFilm setCallModal={setCallModal}/>
            <FilmsList films={filmsList} setDragedFilm={setDragedFilm}/>
            <HallsTimeLineList data={data} dragedFilm={dragedFilm} setCallModal={setCallModal} hallsSeances={hallsSeances} />
            <SaveConfig />
            {/* <div className="conf-step__movies">
                <div className="conf-step__movie">
                    <img className="conf-step__movie-poster" alt="poster" src="i/poster.png" />
                        <h3 className="conf-step__movie-title">Звёздные войны XXIII: Атака клонированных клонов</h3>
                        <p className="conf-step__movie-duration">130 минут</p>
                </div>

                <div className="conf-step__movie">
                    <img className="conf-step__movie-poster" alt="poster" src="i/poster.png" />
                        <h3 className="conf-step__movie-title">Миссия выполнима</h3>
                        <p className="conf-step__movie-duration">120 минут</p>
                </div>

                <div className="conf-step__movie">
                    <img className="conf-step__movie-poster" alt="poster" src="i/poster.png" />
                        <h3 className="conf-step__movie-title">Серая пантера</h3>
                        <p className="conf-step__movie-duration">90 минут</p>
                </div>

                <div className="conf-step__movie">
                    <img className="conf-step__movie-poster" alt="poster" src="i/poster.png" />
                        <h3 className="conf-step__movie-title">Движение вбок</h3>
                        <p className="conf-step__movie-duration">95 минут</p>
                </div>

                <div className="conf-step__movie">
                    <img className="conf-step__movie-poster" alt="poster" src="i/poster.png" />
                        <h3 className="conf-step__movie-title">Кот Да Винчи</h3>
                        <p className="conf-step__movie-duration">100 минут</p>
                </div>
            </div> */}

            {/* <div className="conf-step__seances">
                <div className="conf-step__seances-hall">
                    <h3 className="conf-step__seances-title">Зал 1</h3>
                    <div className="conf-step__seances-timeline">
                        <div className="conf-step__seances-movie" style={{'width': '60px', 'backgroundColor': 'rgb(133, 255, 137)', 'left': '0'}}>
                            <p className="conf-step__seances-movie-title">Миссия выполнима</p>
                            <p className="conf-step__seances-movie-start">00:00</p>
                        </div>
                        <div className="conf-step__seances-movie" style={{'width': '60px', 'backgroundColor': 'rgb(133, 255, 137)', 'left': '360'}}>
                            <p className="conf-step__seances-movie-title">Миссия выполнима</p>
                            <p className="conf-step__seances-movie-start">12:00</p>
                        </div>
                        <div className="conf-step__seances-movie" style={{'width': '65px', 'backgroundColor': 'rgb(202, 255, 133)', 'left': '420px'}}>
                            <p className="conf-step__seances-movie-title">Звёздные войны XXIII: Атака клонированных клонов</p>
                            <p className="conf-step__seances-movie-start">14:00</p>
                        </div>
                    </div>
                </div>
                <div className="conf-step__seances-hall">
                    <h3 className="conf-step__seances-title">Зал 2</h3>
                    <div className="conf-step__seances-timeline">
                        <div className="conf-step__seances-movie" style={{'width': '65px', 'backgroundColor': 'rgb(202, 255, 133)', 'left': '595px'}}>
                            <p className="conf-step__seances-movie-title">Звёздные войны XXIII: Атака клонированных клонов</p>
                            <p className="conf-step__seances-movie-start">19:50</p>
                        </div>
                        <div className="conf-step__seances-movie" style={{'width': '60px', 'backgroundColor': 'rgb(133, 255, 137)', 'left': '660'}}>
                            <p className="conf-step__seances-movie-title">Миссия выполнима</p>
                            <p className="conf-step__seances-movie-start">22:00</p>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <fieldset className="conf-step__buttons text-center">
                <button className="conf-step__button conf-step__button-regular">Отмена</button>
                <input type="submit" value="Сохранить" className="conf-step__button conf-step__button-accent" />
            </fieldset> */}
        </div>
    )
}