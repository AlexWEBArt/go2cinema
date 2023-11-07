// import Logo from "../../root/Logo/Logo";
// import Main from "../../root/Main/Main";

import AvalibleSessionsFilm from "../../widgets/AvalibleSessionsFilm/AvalibleSessionsFilm";
import DateLineSelection from "../../widgets/DateLineSelection/DateLineSelection";

import { v4 as uuidv4 } from "uuid"

export default function HomePage({data}) {
    // console.log(data)
    if (!data) return
    const { films, halls, seances } = data
    
    return (
        <div className="page">
            <DateLineSelection />
            {films && films.map(film => {
                const filmSeances = seances.filter(seance => seance.seance_filmid === film.film_id)
                // console.log(filmSeances)
                const filmHalls = filmSeances.map(seance => {
                    const hallName = halls.filter(hall => seance.seance_hallid === hall.hall_id)[0].hall_name

                    return ({
                        ...seance,
                        hall_name: hallName
                    })
                })
                // const hallsSeances = halls.filter(hall => filmHallsId.includes(hall.hall_id))
                // console.log(hallsSeances)
                return <AvalibleSessionsFilm key={uuidv4()} film={film} filmSeances={filmHalls}/>
            })}
        </div>
    )
}