import { useState, useEffect } from 'react';

interface AuthState {
  isAuthenticated: boolean;
  user: { id: string; name: string } | null;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
  });

  useEffect(() => {
    // Recuperar el token y los datos del usuario desde localStorage
    const token = localStorage.getItem('tuGastoAuthToken');
    const userJson = localStorage.getItem('tuGastoUser');

    // Verificar si el token existe y los datos del usuario son válidos
    const isAuthenticated = !!token;
    let user = null;
    
    if (userJson) {
      try {
        user = JSON.parse(userJson);
      } catch (error) {
        console.error('Error al analizar los datos del usuario:', error);
      }
    }

    setAuthState({ isAuthenticated, user });
  }, []);

  return authState;
};