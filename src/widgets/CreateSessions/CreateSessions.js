import { useState } from "react";
import SaveConfig from "../PanelItem/features/SaveConfig/SaveConfig";
import AddFilm from "./features/AddFilm/AddFilm";
import FilmsList from "./features/FilmsList/FilmsList";
import HallsTimeLineList from "./features/HallsTimeLineList/HallsTimeLineList";

export default function CreateSessions({ data, filmsList,  setCallModal }) {
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
            <FilmsList data={data} setCallModal={setCallModal}/>
            <HallsTimeLineList data={data} setCallModal={setCallModal} hallsSeances={hallsSeances} />
            <SaveConfig />
        </div>
    )
}