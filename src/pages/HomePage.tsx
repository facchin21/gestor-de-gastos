import { Banner } from "../components/home/Banner";
import { ArticleHome as Article } from "../components/home/ArticleHome";
import imageGasto from '../assets/images/gastos.png'
import imageIngreso from '../assets/images/ingresos.png'
import { FuncionHome } from "../components/home/FuncionHome";

export function Home () {

    return(
        <div className="bg-primary py-12">
            <Banner/>
            <Article title='Carga tus gastos' 
            image={imageGasto}/>

            <Article title='Carga tus ingresos' 
            image={imageIngreso}
            isArrowOnRight={true}/>
            
            <FuncionHome/>
        </div>
    )
}