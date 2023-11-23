import HallNameProvider from "./context/HallNameProvider"
import HallPriceProvider from "./context/HallPriceProvider"
import HallSchemeProvider from "./context/HallSchemeProvider"

const HallConfigProvider = ({ children }) => {
    return (
        <HallNameProvider>
            <HallSchemeProvider>
                <HallPriceProvider>
                    {children}
                </HallPriceProvider>
            </HallSchemeProvider>
        </HallNameProvider>
    )
}

export default HallConfigProvider