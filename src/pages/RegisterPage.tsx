import { useRegister } from "../hooks/useRegister";
import { Container } from "../styled/Container.styled";
import { ContainerForm, Input, Label } from "../styled/Froms.styled";
import { Title } from '../styled/Container.styled';
import { Toaster } from 'react-hot-toast';
import { Error } from '../styled/Container.styled'
import { ButtonSeccion } from '../styled/Button.styled'

export const Register = () => {
  const { register, handleSubmit, onSubmit, onError, errors } = useRegister()

  return (
    <div className="bg-primary px-8 py-16 flex items-center justify-center">
      <Container>
        <Title colors="#E1ECC8">Crear tu cuenta</Title>
        <form onSubmit={handleSubmit(onSubmit, onError)} className="py-6">
          <ContainerForm>
            <Label htmlFor="name">Nombre:</Label>
            <Input
              id="name"
              type="text"
              placeholder="Ingresa tu nombre"
              {...register('name',
                 { required: 'El nombre es obligatorio' })}
            />
            {errors.name && 
            <Error>{errors.name.message}</Error>}
          </ContainerForm>

          <ContainerForm>
            <Label htmlFor="lastname">Apellido:</Label>
            <Input
              id="lastname"
              type="text"
              placeholder="Ingresa tu apellido"
              {...register('lastname',
                 { required: 'El apellido es obligatorio' })}
            />
            {errors.lastname && 
            <Error>{errors.lastname.message}</Error>}
          </ContainerForm>

          <ContainerForm>
            <Label htmlFor="email">Correo:</Label>
            <Input
              id="email"
              type="email"
              placeholder="Ingresa tu correo"
              {...register('email',
                 { required: 'El correo es obligatorio' })}
            />
            {errors.email && 
            <Error>{errors.email.message}</Error>}
          </ContainerForm>

          <ContainerForm>
            <Label htmlFor="password">Contraseña:</Label>
            <Input
              id="password"
              type="password"
              placeholder="Ingresa tu contraseña"
              {...register('password',
                 { required: 'La contraseña es obligatoria' })}
            />
            {errors.password && 
            <Error>{errors.password.message}</Error>}
          </ContainerForm>

          <ButtonSeccion
            type="submit">
            Registrarme
          </ButtonSeccion>
        </form>

        <Toaster />
      </Container>
    </div>
  );
};

