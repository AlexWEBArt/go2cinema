import { createContext, useState } from "react";

export const HallPriceContext = createContext(null)

const HallPriceProvider = ({children}) => {
    const [hallPrice, setHallPrice] = useState({
        hall_price_standart: '',
        hall_price_vip: ''
    })
    const [request, setRequest] = useState(false)
    
    return <HallPriceContext.Provider value={{hallPrice, setHallPrice, request, setRequest}}>{children}</HallPriceContext.Provider>
}

export default HallPriceProvider