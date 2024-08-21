import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

interface LoginFormData {
  email: string;
  password: string;
}

export const useLogin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
  const navigate = useNavigate();
  const setAuthenticated = useAuthStore((state) => state.setAuthenticated);
  const setUser = useAuthStore((state) => state.setUser);

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      const response = await fetch('/session/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        toast.error("Error al iniciar sesión: " + errorMessage);
        throw new Error(`Error en el inicio de sesión: ${errorMessage}`);
      }

      const result = await response.json();
      localStorage.setItem('tuGastoAuthToken', result.token); // Guarda el token
      localStorage.setItem('tuGastoUser', JSON.stringify(result.user)); // Guarda los datos del usuario

      setAuthenticated(true);
      setUser(result.user);

      toast.success('¡Inicio de sesión exitoso!');
      navigate('/home'); // Redirige al usuario a la página de inicio
    } catch (error) {
      toast.error(`Error al iniciar sesión: ${error instanceof Error ? error.message : 'Error desconocido'}`);
    }
  };

  return { register, handleSubmit, onSubmit, errors };
};