import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../types/auth';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

interface AuthActions {
  setUser: (user: User | null) => void;
  logout: () => void;
}

type AuthStore = AuthState & AuthActions;
type SetState = (state: Partial<AuthStore>) => void;

const createAuthSlice = (set: SetState) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user: User | null) => set({ user, isAuthenticated: !!user }),
  logout: () => set({ user: null, isAuthenticated: false })
});

export const useAuthStore = create<AuthStore>()(
  persist(createAuthSlice, {
    name: 'mindblock-auth-storage',
  })
);