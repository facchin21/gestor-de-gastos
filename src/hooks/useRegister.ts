import { FieldErrors, SubmitHandler, useForm, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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

export function useRegister(): UseRegisterReturn {
    const navigate = useNavigate();
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
                const errorMessage = await response.text();
                throw new Error(`Error en el registro: ${errorMessage}`);
            }

            const result = await response.json();
            toast.success('¡Registro exitoso!');
            console.log("El resultado de la respuesta es", result);

            // Redirigir al usuario con un retraso de 300 ms
            setTimeout(() => {
             navigate('/home');
            }, 100);
        } catch (error: unknown) {
            toast.error(`Error al crear el usuario`);
        }
    };

    const onError = (errors: FieldErrors<RegisterFormData>) => {
        toast.error(errors ? '¡Complete todos los campos por favor!' : '');
    };

    return { register, handleSubmit, onSubmit, onError, errors };
}