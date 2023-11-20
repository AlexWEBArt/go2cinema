import { createContext, useState } from "react";

export const HallNameContext = createContext(null)

const HallNameProvider = ({children}) => {
    const [hallName, setHallName] = useState({
        hall_name: ''
    })
    const [request, setRequest] = useState(false)
    
    return <HallNameContext.Provider value={{hallName, setHallName, request, setRequest}}>{children}</HallNameContext.Provider>
}

export default HallNameProvider