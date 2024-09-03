import { useText } from "../hooks/useText";
import { Title } from "../styled/Title.styled";
import { TableDefault } from "../components/TableDefault";
import { ArticleHome } from "../components/home/ArticleHome";
import { useUser } from "../hooks/useUser";
import { useEffect, useState } from "react";



export const HomePrivatePage: React.FC = () => {
    const { user } = useUser();
    const [userName, setUserName] = useState('')

    useEffect(() => {
        if(user?.message.name){
            setUserName(user?.message.name)
        }
    },[user])

    const { displayedText } = useText(userName);

    return (
        <div className="bg-primary flex flex-col items-center justify-start py-12">
            <header>
                <Title>Bienvenido {displayedText}</Title>
                <p className="font-Inter font-light text-center py-4 px-6">
                    Tu Gasto es la herramienta perfecta para gestionar tus finanzas personales de manera sencilla y eficiente.
                    Con nuestra plataforma, puedes llevar un control detallado de tus ingresos y gastos, organizarlos por categorías,
                    y visualizar informes que te ayudarán a tomar decisiones financieras más informadas.
                </p>
            </header>
            <div className="flex flex-col justify-center items-center">
                <ArticleHome title="Ya estás listo para cargar tus gastos" fontSize="3.5rem" />
                <TableDefault 
                    description="Chocolate"
                    price={890}
                    category="Kiosco"
                    date="21-8-2024"
                />
            </div>
            <div className="flex flex-col justify-center items-center">
                <ArticleHome title="Ya estás listo para cargar tus gastos" fontSize="3.5rem" />
                <TableDefault 
                    description="Sueldo"
                    price={800.000}
                    category="Trabajo"
                    date="12-2-2024"
                />
            </div>
        </div>
    );
};