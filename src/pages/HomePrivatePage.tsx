import { useText } from "../hooks/useText";
import { Title } from "../styled/Title.styled";
import { TableDefault } from "../components/TableDefault";
import { ArticleHome } from "../components/home/ArticleHome";


export const HomePrivatePage = () => {
    const name =  'Bienvenido Invitado'; 
    const { displayedText } = useText( name );

    return (
        <div className="bg-primary flex flex-col items-center justify-start h-screen pt-12">
            <header>
                <Title>{displayedText}</Title>
                <p className="font-Inter font-light text-center py-4 px-6">
                    Tu Gasto es la herramienta perfecta para gestionar tus finanzas personales de manera sencilla y eficiente. 
                    Con nuestra plataforma, puedes llevar un control detallado de tus ingresos y gastos, organizarlos por categorías, 
                    y visualizar informes que te ayudarán a tomar decisiones financieras más informadas.
                </p>
            </header>
            <div className="flex flex-col justify-center items-center">
                <ArticleHome title='Ya estas listo para Carga tus gastos' fontSize="3.5rem"/>
                <TableDefault/>
            </div>
        </div>
    );
};