import { Header } from "../../components/Header";
import { CofeeCards } from "./CofeeCards";
import { Intro } from "./Intro";

export function Home() {
    return (
        <div className="Home">
            <Header />
            <Intro />
            <h1>Nossos cafés</h1>
            <CofeeCards />
        </div>
    )
}