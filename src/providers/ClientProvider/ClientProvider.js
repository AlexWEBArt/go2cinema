import { createContext, useState } from "react"

export const ClientContext = createContext(null)

const ClientProvider = ({children}) => {
    const [selectedSession, setSelectedSession] = useState({
        hallName: '',
        film: '',
        startSession: ''
    })
    const [selectedPlaces, setSelectedPlaces] = useState(null)
    const [requestData, setRequestData] = useState(false)
    
    return <ClientContext.Provider value={{selectedSession, setSelectedSession, selectedPlaces, setSelectedPlaces}}>{children}</ClientContext.Provider>
}

export default ClientProvider