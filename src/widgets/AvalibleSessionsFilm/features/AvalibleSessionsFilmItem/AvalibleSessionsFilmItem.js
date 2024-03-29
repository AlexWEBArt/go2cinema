export default function AvalibleSessionsFilmItem({film}) {

    return (
        <div className="movie__info">
            <div className="movie__poster">
                <img className="movie__poster-image" alt="Звёздные войны постер" src={film.film_poster}/>
            </div>
            <div className="movie__description">
                <h2 className="movie__title">{film.film_name}</h2>
                <p className="movie__synopsis">{film.film_description}</p>
                <p className="movie__data">
                <span className="movie__data-duration">{film.film_duration} </span>
                <span className="movie__data-origin">{film.film_origin}</span>
                </p>
            </div>
        </div>  
    )
}