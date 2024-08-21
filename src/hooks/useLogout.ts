import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';

export function useLogout() {
  const setAuthenticated = useAuthStore(state => state.setAuthenticated);
  const setUser = useAuthStore(state => state.setUser);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Opcional: Llamar al endpoint de cierre de sesión en el backend
      const token = localStorage.getItem('tuGastoAuthToken');
      if (token) {
        await fetch('/session/logout', {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      }

      // Eliminar el token y la información del usuario del almacenamiento local
      localStorage.removeItem('tuGastoAuthToken');

      // Actualizar el estado global
      setAuthenticated(false);
      setUser(null);

      // Redirigir al usuario a la página de inicio de sesión o página principal
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return { handleLogout };
}