export interface User {
  id: string;
  username: string;
  email: string;
  createdAt: string;
}

export interface AuthUser extends Omit<User, 'createdAt'> {
  isAuthenticated: boolean;
}

export interface AuthState {
  users: User[];
  currentUser: AuthUser | null;
  register: (userData: Omit<User, 'id' | 'createdAt'> & { password: string }) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: () => boolean;
} 