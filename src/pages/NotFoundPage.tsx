import { Button } from "../styled/Button.styled";
import { Title } from '../styled/Container.styled';

export function NotFound () {
    return(
        <div className="bg-primary flex flex-col items-center justify-center h-screen">
            <Title>
                Error
            </Title>
            <h3 className="py-5 text-center font-Inter">Pagina no encontrada</h3>
            <Button to='/home'>
                Volver al inicio
            </Button>
        </div>
    )
}