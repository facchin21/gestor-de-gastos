import create from 'zustand'

interface AuthState {
    isAuthenticated: boolean;
    setAuthenticated: (status: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => {
  const token = localStorage.getItem('token');

  return {
    isAuthenticated: !!token,
    setAuthenticated: (status) => {
      localStorage.setItem('tuGastoAuthToken', status ? 'token' : '');
      set({ isAuthenticated: status });
    },
  };
});
