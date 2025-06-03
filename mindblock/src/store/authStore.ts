import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AuthState, User, AuthUser } from "./types";

// Simple hash function for demo purposes
const hashPassword = (password: string): string => {
  return btoa(password); // Base64 encoding for demo
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      users: [],
      currentUser: null,

      register: async (userData) => {
        const { username, email, password } = userData;

        // Check if user already exists
        const existingUser = get().users.find((user) => user.email === email);
        if (existingUser) {
          throw new Error("User already exists");
        }

        const newUser: User = {
          id: crypto.randomUUID(),
          username,
          email,
          createdAt: new Date().toISOString(),
        };

        // In a real app, we would send this to a backend
        // For demo, we'll store the hashed password with the user
        const hashedPassword = hashPassword(password);

        set((state) => ({
          users: [...state.users, { ...newUser, password: hashedPassword }],
        }));
      },

      login: async (email: string, password: string) => {
        const user = get().users.find((u) => u.email === email);

        if (!user) {
          throw new Error("User not found");
        }

        // In a real app, we would verify the password hash
        const hashedPassword = hashPassword(password);
        if (hashedPassword !== user.password) {
          throw new Error("Invalid password");
        }

        const authUser: AuthUser = {
          id: user.id,
          username: user.username,
          email: user.email,
          isAuthenticated: true,
        };

        set({ currentUser: authUser });
      },

      logout: () => {
        set({ currentUser: null });
      },

      isAuthenticated: () => {
        return !!get().currentUser?.isAuthenticated;
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        users: state.users,
        currentUser: state.currentUser,
      }),
    }
  )
);
