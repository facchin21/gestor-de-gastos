import { FieldErrors, SubmitHandler, useForm, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import toast from "react-hot-toast";

interface RegisterFormData {
    name: string;
    lastname: string;
    email: string;
    password: string;
}

interface UseRegisterReturn {
    register: UseFormRegister<RegisterFormData>;
    handleSubmit: UseFormHandleSubmit<RegisterFormData>;
    onSubmit: SubmitHandler<RegisterFormData>;
    onError: (errors: FieldErrors<RegisterFormData>) => void;
    errors: FieldErrors<RegisterFormData>;
}
export function useRegister (): UseRegisterReturn {

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>();
    
    const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
        try {
          const response = await fetch('/user/new', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
    
          if (!response.ok) {
            throw new Error('Error en el registro');
          }
    
          const result = await response.json();
          toast.success('¡Registro exitoso!');
        } catch (error) {
          toast.error('Error al crear el usuario');
        }
      };
    
    const onError = (errors: FieldErrors<RegisterFormData>) => {
        toast.error(errors ? 'Complete todos los campos por favor!' : '');
    };

    return { register, handleSubmit, onSubmit, onError, errors }
}