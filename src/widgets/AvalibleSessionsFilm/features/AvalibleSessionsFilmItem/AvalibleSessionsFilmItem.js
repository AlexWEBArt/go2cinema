// import DateItemList from "./components/DateItemList/DateItemList";
// import './avalibleSessionsFilms.css'

export default function AvalibleSessionsFilmItem({film}) {

    return (
        <div className="movie__info">
            <div className="movie__poster">
                <img className="movie__poster-image" alt="Звёздные войны постер" src={film.image}/>
            </div>
            <div className="movie__description">
                <h2 className="movie__title">{film.title}</h2>
                <p className="movie__synopsis">{film.discription}</p>
                <p className="movie__data">
                <span className="movie__data-duration">{film.duration}</span>
                <span className="movie__data-origin">{film.origin}</span>
                </p>
            </div>
        </div>  
    )
}