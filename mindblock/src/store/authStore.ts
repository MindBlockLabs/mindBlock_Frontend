import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AuthState, User, AuthUser } from "./types";

// Simple hash function for demo purposes
const hashPassword = (password: string): string => {
  return btoa(password); // Base64 encoding for demo
};

// Extended User type for internal storage with password
type UserWithPassword = User & { password: string };

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      users: [] as UserWithPassword[],
      currentUser: null,

      register: async (
        userData: Omit<User, "id" | "createdAt"> & { password: string }
      ) => {
        const { username, email, password } = userData;

        // Check if user already exists
        const existingUser = (get().users as UserWithPassword[]).find(
          (user: UserWithPassword) => user.email === email
        );
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

        set((state: AuthState) => ({
          users: [
            ...(state.users as UserWithPassword[]),
            { ...newUser, password: hashedPassword },
          ],
        }));
      },

      login: async (email: string, password: string) => {
        const user = (get().users as UserWithPassword[]).find(
          (u: UserWithPassword) =>
            u.email.trim().toLowerCase() === email.trim().toLowerCase()
        );

        if (!user) {
          console.error("User not found");
          throw new Error("User not found");
        }

        // In a real app, we would verify the password hash
        const hashedPassword = hashPassword(password);
        if (hashedPassword !== user.password) {
          console.error("Invalid password");
          throw new Error("Invalid password");
        }

        const authUser: AuthUser = {
          id: user.id,
          username: user.username,
          email: user.email,
          createdAt: user.createdAt,
          isAuthenticated: true,
        };

        set({ currentUser: authUser });
        console.log("User logged in successfully, currentUser set:", authUser);
      },

      logout: () => {
        set({ currentUser: null });
      },
      // REMOVED: isAuthenticated function that was causing infinite loops
    }),
    {
      name: "auth-storage",
      partialize: (state: AuthState) => ({
        users: state.users,
        currentUser: state.currentUser,
      }),
    }
  )
);
