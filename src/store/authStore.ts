import create from 'zustand'

interface AuthState {
    isAuthenticated: boolean;
    setAuthenticated: (status: boolean) => void;
    user: { id: string; name: string } | null;
    setUser: (user: { id: string; name: string } | null) => void;
}

export const useAuthStore = create<AuthState>((set) => {
  const token = localStorage.getItem('tuGastoAuthToken');
  const userJson = localStorage.getItem('tuGastoUser');

  return {
    isAuthenticated: !!token,
    setAuthenticated: (status) => {
      localStorage.setItem('tuGastoAuthToken', status ? 'token' : '');
      set({ isAuthenticated: status });
    },
    user: userJson ? JSON.parse(userJson) : null,
    setUser: (user) => {
      localStorage.setItem('tuGastoUser', JSON.stringify(user));
      set({ user });
    },
  };
});