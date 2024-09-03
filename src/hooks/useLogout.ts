import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';

export function useLogout() {
  const setAuthenticated = useAuthStore(state => state.setAuthenticated);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        await fetch('/session/logout', {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      }
      // Eliminar el token y la información del usuario del almacenamiento local
      localStorage.removeItem('token');
      // Actualizar el estado global
      setAuthenticated(false);

      navigate('/');
      
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return { handleLogout };
}