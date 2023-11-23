import { createContext, useState } from "react";

export const HallSchemeContext = createContext(null)

const HallSchemeProvider = ({children}) => {
    const [hallScheme, setHallScheme] = useState({
        hall_places: '2',
        hall_rows: '2'
    })
    const [hallConfig, setHallConfig] = useState({
        hall_congig: '',
    })
    const [request, setRequest] = useState(false)

    return <HallSchemeContext.Provider value={{hallScheme, setHallScheme, hallConfig, setHallConfig, request, setRequest}}>{children}</HallSchemeContext.Provider>
}

export default HallSchemeProvider