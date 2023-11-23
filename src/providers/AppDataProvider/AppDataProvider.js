import { createContext, useState } from "react"

export const AppDataContext = createContext(null)

const AppDataProvider = ({children}) => {
    const [data, setData] = useState(null)
    const [requestData, setRequestData] = useState(false)
    
    return <AppDataContext.Provider value={{data, setData, requestData, setRequestData}}>{children}</AppDataContext.Provider>
}

export default AppDataProvider