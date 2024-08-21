import create from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  setAuthenticated: (status: boolean) => void;
  user: { id: string; name: string } | null;
  setUser: (user: { id: string; name: string } | null) => void;
}

export const useAuthStore = create<AuthState>((set) => {
  // Recupera el estado de autenticación y el usuario desde localStorage
  const token = localStorage.getItem('tuGastoAuthToken');
  const userJson = localStorage.getItem('tuGastoUser');
  
  // Función para analizar el JSON con manejo de errores
  const parseUser = (userJson: string | null) => {
    try {
      return userJson ? JSON.parse(userJson) : null;
    } catch (error) {
      console.error('Error al analizar el JSON del usuario:', error);
      return null;
    }
  };

  return {
    isAuthenticated: !!token, // Si hay un token, el usuario está autenticado
    setAuthenticated: (status) => set({ isAuthenticated: status }),
    user: parseUser(userJson), // Analiza el JSON con manejo de errores
    setUser: (user) => set({ user }),
  };
});