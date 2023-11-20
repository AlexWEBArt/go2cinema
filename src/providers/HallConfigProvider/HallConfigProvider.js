import HallNameProvider from "./context/HallNameProvider"

const HallConfigProvider = ({children}) => {
    return (
        <HallNameProvider>
            {children}
        </HallNameProvider>
    )
}

export default HallConfigProvider