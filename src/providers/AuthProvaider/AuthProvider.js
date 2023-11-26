import { createContext, useState } from "react"

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState(localStorage.getItem('Go2CinemaToken') || '')
    
    return <AuthContext.Provider value={{admin, setAdmin, token, setToken}}>{children}</AuthContext.Provider>
}

export default AuthProvider