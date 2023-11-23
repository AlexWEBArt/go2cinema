import { createContext, useState } from "react"

export const FilmContext = createContext(null)

const FilmProvider = ({children}) => {
    const [film, setFilm] = useState({
        film_name: '',
        film_description: '',
        film_duration: '',
        film_origin: '',
        film_poster: '',
    })
    const [request, setRequest] = useState(false)
    
    return <FilmContext.Provider value={{film, setFilm, request, setRequest}}>{children}</FilmContext.Provider>
}

export default FilmProvider