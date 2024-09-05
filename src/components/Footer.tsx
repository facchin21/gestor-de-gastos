import { Title } from "../styled/Container.styled";
import { itemsFront, itemsBack, itemsProps } from "../data/itemsRedes";
import { Link } from "react-router-dom";

export function Footer () {
    return(
        <footer className="bg-secondary py-16 px-8">
            <header>
                <Title fontSize="2rem" colors="#E1ECC8">Nuestras Redes</Title>
            </header>
            <div className="flex justify-between items-center font-Inter mt-4 text-primary">
                <div>
                    <h3 className="text-xl mb-4">Desarollador FrontEnd</h3>
                    <ContainerInFooter items={itemsFront}/>
                </div>
                <div>
                    <h3 className="text-xl mb-4">Desarollador BackEnd</h3>
                    <ContainerInFooter items={itemsBack}/>
                </div>
            </div>
        </footer>   
    )
}

interface ContainerInFooterProps {
    items: itemsProps[];
}

export const ContainerInFooter = ({items } : ContainerInFooterProps) => {

    return(
        <ul>
            {items.map(item => (
                <li key={item.id} className="flex items-center gap-2 mt-2 font-Inter text-primary">
                    <item.logo size={24} />
                    <Link to={item.link}>
                        <span className="transition-all duration-1000
                        hover:text-white">{item.name}</span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}