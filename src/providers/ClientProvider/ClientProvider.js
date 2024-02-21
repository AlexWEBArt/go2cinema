import { createContext, useState } from "react"

export const ClientContext = createContext(null)

const ClientProvider = ({children}) => {
    const [selectedSession, setSelectedSession] = useState({
        hallName: '',
        film: '',
        seanceId: '',
        startSession: '',
        seanceHallConfig: ''
    })
    const [selectedPlaces, setSelectedPlaces] = useState({
        row: '',
        place: '',
        cost: '',
        seanceConfig: '',
        seanceId: ''
    })
    
    return <ClientContext.Provider value={{selectedSession, setSelectedSession, selectedPlaces, setSelectedPlaces}}>{children}</ClientContext.Provider>
}

export default ClientProvider