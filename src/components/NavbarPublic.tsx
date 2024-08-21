import imageLogo from '../assets/images/logo.png'
import { Button } from '../styled/Button.styled';

export const NavbarPublic = () => {
    return(
        <nav className="w-full bg-primary flex items-center justify-center py-3 relative z-20">
             {/* Contenedor para el logo */}
             <div className="flex items-center">
                <img
                    src={imageLogo}
                    alt={`Logo de la aplicación tu gasto}`}
                    className="w-10/12"/>
            </div>
            <div className='flex flex-row items-center justify-center gap-2'>
            <Button to='/'>
                Inicio
            </Button>
            <Button to='/register'>
                Registrarte
            </Button>
            <Button to='/login'>
                Iniciar sesion
            </Button>
            </div>

        </nav>
    )
}