import { useEffect } from "react";
import { useUserStore } from "../store/userStore";
import { useAuth } from "./useAuth";

interface UserMessage {
    id: string;
    name: string;
    lastname: string;
    createdAt: string;
    updatedAt: string;
}

interface User {
    message: UserMessage;
    details: boolean;
}


export function useUser(): { user: User | null } {
    const { user, setUser } = useUserStore();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        const fetchUser = async () => {
            if (isAuthenticated) {
                try {
                    const token = localStorage.getItem('token');
                    if (!token) {
                        console.error('No se encontró el token en localStorage');
                        return;
                    }

                    // Verificar que el token tenga el formato correcto "Bearer <token>"
                    if (!/^Bearer\s[\w-]+\.[\w-]+\.[\w-]+$/.test(token)) {
                        console.error('El token no está en el formato correcto');
                        return;
                    }

                    const response = await fetch('/user/show', {
                        headers: {
                            'Authorization': token,
                            'Content-Type': 'application/json'
                        }
                    });

                    if (!response.ok) {
                        const errorText = await response.text();
                        console.error('Error en la respuesta:', errorText);
                        throw new Error(`Network response was not ok: ${response.statusText}`);
                    }

                    const data = await response.json();
                    setUser(data);
                } catch (error) {
                    console.error('Error al obtener la información de usuario:', error);
                }
            }
        };

        fetchUser();
    }, [isAuthenticated, setUser]);

    return { user };
}