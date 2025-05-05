export type AuthProvider = 'google' | 'starknet';

export interface User {
  id: string;
  email?: string;
  name?: string;
  walletAddress?: string;
  authProvider: AuthProvider;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  logout: () => void;
}