import HallConfigProvider from "./HallConfigProvider/HallConfigProvider"

const AppProvider = ({children}) => {
    return (
        <HallConfigProvider>
            {children}
        </HallConfigProvider>

    )
}

export default AppProvider