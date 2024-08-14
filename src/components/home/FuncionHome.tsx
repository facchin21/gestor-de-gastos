import { Title } from "../../styled/Title.styled";
import imageCircle from '../../assets/images/circle.png'
import { Button } from "../../styled/Button.styled";

export function FuncionHome () {
    return(
        <div>
            <header className="relative z-20">
                <Title>Muchas funciones <span className="text-secondary">+</span></Title>
                <img src={imageCircle} 
                alt="imagen de fondo circular."
                className="absolute top-6 right-40 z-10" />
                <p className="font-Inter text-sm font-light text-center py-4">
                    Tu invitamos a que te unas a Tu Gasto 🏦Vas a poder ver 
                    tu gastos, ingresos de los ultimo 24 días. Agregando la
                     categoría de cada uno. Y mucho mas.
                </p>
            </header>
            <div className='flex w-full justify-center items-center
                gap-6 py-8'>
                    <Button to='/register'>
                        Registrarte
                    </Button>
                    <Button to='/login'>
                        Iniciar sesion
                    </Button>
                </div>
        </div>
    )
}