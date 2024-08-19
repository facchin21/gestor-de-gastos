import { Container } from '../styled/Container.styled';
import { Title } from '../styled/Title.styled';
import { Input, Label } from '../styled/Froms.styled';
import { Link } from 'react-router-dom';
import { ButtonSeccion } from '../styled/ButtonSeccion';
export const Login = () => {
  return (
    <div className="bg-primary px-8 py-16 flex items-center justify-center">
          <Container>
              <Title colors="#E1ECC8"
              className='py-3'>Iniciar Sesion</Title>
              <div className="flex flex-col gap-1">
                <Label htmlFor='email'>Correo:</Label>
                <Input placeholder='example juan21@gmail.com'/>
                <Label htmlFor='password'>Contraseña:</Label>
                <Input placeholder='Ingresar su contraseña!'
                id='password' type='password'/>
                <div className='mt-4 text-center'>
                  <Link to='/recuperar'
                    className='text-primary
                    font-Inter font-extrabold
                    hover:text-red-500'>
                    Recuperar Contraseña
                  </Link>
                </div>
                <ButtonSeccion to="/">Iniciar sesion</ButtonSeccion>
              </div>
          </Container>
    </div>
  )
}
