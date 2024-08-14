import { Banner } from "../components/home/Banner";
import { Gastos } from "../components/home/Gastos";

export function Home () {
    return(
        <div className="bg-primary py-12">
            <Banner/>
            <Gastos/>
        </div>
    )
}