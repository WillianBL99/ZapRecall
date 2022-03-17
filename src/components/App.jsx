import Header from "./Header"
import MainScreen from "./MainScreen"
import InitialScreen from "./InitialScreen"

export default function App(){
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <InitialScreen />
                <MainScreen />
            </main>
        </>
    )
}