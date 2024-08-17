import { Container } from '../styled/Container.styled';
import { Title } from '../styled/Title.styled';
import { Input, Label } from '../styled/Froms.styled';
import { Link } from 'react-router-dom';
export const Login = () => {
  return (
    <div className="bg-primary py-16 flex items-center justify-center">
          <Container>
              <Title colors="#E1ECC8">Iniciar Sesion</Title>
              <div>
                <Label htmlFor='email'>Correo:</Label>
                <Input placeholder='example juan21@gmail.com'/>
                <Label htmlFor='password'>Contraseña:</Label>
                <Input placeholder='Ingresar su contraseña!'
                id='password' type='password'/>
                <div className='mt-4'>
                  <Link to='/recuperar'
                  className='text-primary
                  font-Inter font-extrabold'>Recuperar Contraseña</Link>
                </div>
              </div>
          </Container>
    </div>
  )
}
