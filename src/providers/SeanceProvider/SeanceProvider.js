import { createContext, useState } from "react"

export const SeanceContext = createContext(null)

const SeanceProvider = ({children}) => {
    const [seance, setSeance] = useState({
        seance_filmid: '',
        seance_hallid: '',
        seance_time: '',
        seance_start: '',
        seance_end: '',
    })
    const [request, setRequest] = useState(false)
    
    return <SeanceContext.Provider value={{seance, setSeance, request, setRequest}}>{children}</SeanceContext.Provider>
}

export default SeanceProvider