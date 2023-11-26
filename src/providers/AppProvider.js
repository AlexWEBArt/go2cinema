import AppDataProvider from "./AppDataProvider/AppDataProvider"
import AuthProvider from "./AuthProvaider/AuthProvider"
import ClientProvider from "./ClientProvider/ClientProvider"
import FilmProvider from "./FilmProvider/FilmProvider"
import HallConfigProvider from "./HallConfigProvider/HallConfigProvider"
import SeanceProvider from "./SeanceProvider/SeanceProvider"

const AppProvider = ({ children }) => {
    return (
        <AuthProvider>
            <AppDataProvider>
                <HallConfigProvider>
                    <FilmProvider>
                        <SeanceProvider>
                            <ClientProvider>
                                {children}
                            </ClientProvider>
                        </SeanceProvider>
                    </FilmProvider>
                </HallConfigProvider>
            </AppDataProvider>
        </AuthProvider>

    )
}

export default AppProvider