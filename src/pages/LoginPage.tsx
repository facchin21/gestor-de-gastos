import { Container } from '../styled/Container.styled';
import { Title } from '../styled/Title.styled';
import { Input, Label } from '../styled/Froms.styled';
import { Link } from 'react-router-dom';
import { ButtonSeccion } from '../styled/ButtonSeccion';
import { useLogin } from '../hooks/useLogin';
import { Error } from '../styled/Error.styled';
export const Login = () => {
  const { register, handleSubmit, onSubmit, errors } = useLogin();
  return (
      <div className="bg-primary px-8 py-32 flex items-center justify-center">
        <Container>
          <Title colors="#E1ECC8" className='py-3'>
            Iniciar Sesion
          </Title>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
            <Label htmlFor='email'>Correo:</Label>
            <Input
              placeholder='example juan21@gmail.com'
              {...register('email', { required: 'Correo es obligatorio' })}
            />
            {errors.email && <Error>{errors.email.message}</Error>}
            
            <Label htmlFor='password'>Contraseña:</Label>
            <Input
              placeholder='Ingresar su contraseña!'
              id='password'
              type='password'
              {...register('password', { required: 'Contraseña es obligatoria' })}
            />
            {errors.password && <Error>{errors.password.message}</Error>}
            
            <div className='mt-4 text-center'>
              <Link
                to='/recuperar'
                className='text-primary font-Inter font-extrabold hover:text-red-500'
              >
                Recuperar Contraseña
              </Link>
            </div>
            
            <ButtonSeccion type='submit'>Iniciar sesión</ButtonSeccion>
          </form>
        </Container>
    </div>
  );
};
