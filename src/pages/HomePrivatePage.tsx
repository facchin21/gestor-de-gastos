import { useText } from "../hooks/useText";
import { Title } from "../styled/Title.styled";

export const HomePrivatePage = () => {
    const name =  'Invitado'; 
    const { displayedText } = useText( name );

    return (
        <>  
            <div className="bg-primary flex flex-col items-center justify-start h-screen pt-12">
                <Title>{`Bienvenido ${displayedText}`}</Title>
            </div>
        </>
    );
};