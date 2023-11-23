import AppDataProvider from "./AppDataProvider/AppDataProvider"
import FilmProvider from "./FilmProvider/FilmProvider"
import HallConfigProvider from "./HallConfigProvider/HallConfigProvider"
import SeanceProvider from "./SeanceProvider/SeanceProvider"

const AppProvider = ({ children }) => {
    return (
        <AppDataProvider>
            <HallConfigProvider>
                <FilmProvider>
                    <SeanceProvider>
                        
                        {children}
                    </SeanceProvider>
                </FilmProvider>
            </HallConfigProvider>
        </AppDataProvider>

    )
}

export default AppProvider