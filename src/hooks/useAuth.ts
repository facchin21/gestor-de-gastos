import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Verificar si el token de autenticación está en el almacenamiento local
    const token = localStorage.getItem('tuGastoAuthToken');
    setIsAuthenticated(!!token);
  }, []);

  return { isAuthenticated };
};