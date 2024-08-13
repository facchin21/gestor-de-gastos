import { Button } from '../styled/Button.styled';

export function Banner() {
    const description = `Tu gasto mantiene todo organizado. 
    Decile adiós a tus gastos innecesarios.`;

    return (
         <div className='w-full text-center relative p-8 bg-light-green'>
            <div className='relative inline-block'>
                <h1 className='font-Caveat text-6xl relative'>
                    Elimina tus <span className='highlight--gastos'> 
                        gastos</span> 
                    <span className='highlight--innecesarios'>
                        innecesarios
                    </span>
                </h1>
                <p className='font-Inter text-md font-light mt-4'>
                    {description}
                </p>
                <div className='flex w-full justify-center items-center
                gap-6'>
                    <Button >
                        Registrarte
                    </Button>
                    <Button >
                        Iniciar sesion
                    </Button>
                </div>
            </div>
        </div>
    );
}