import { Button } from "../styled/Button.styled"
import { Title } from "../styled/Container.styled"

export const RecoverPage = () => {

    return(
        <div className="min-h-screen bg-primary flex flex-col items-center justify-center">
            <Title>Actualmente el apartado esta en matenimiento...</Title>
            <p className="font-Inter">Vuelve a intentarlo mas tarde!</p>
            <Button to='/' className="my-8">
                Volver al inicio
            </Button>
        </div>
    )
}