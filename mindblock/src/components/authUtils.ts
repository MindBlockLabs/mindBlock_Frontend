// Utility functions for localStorage-based authentication

export type User = {
  username?: string;
  email: string;
  password?: string;
  provider?: "local" | "google" | "starknet";
  googleId?: string;
  starknetAddress?: string;
};

const USERS_KEY = "mindblock_users";
const AUTH_KEY = "mindblock_auth";

export function getUsers(): User[] {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
}

export function saveUsers(users: User[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function registerUser(user: User): { success: boolean; error?: string } {
  const users = getUsers();
  if (
    users.some((u) => u.email === user.email && u.provider === user.provider)
  ) {
    return { success: false, error: "User already exists" };
  }
  users.push(user);
  saveUsers(users);
  setAuthUser(user);
  return { success: true };
}

export function loginUser(
  email: string,
  password: string
): { success: boolean; user?: User; error?: string } {
  const users = getUsers();
  const user = users.find(
    (u) =>
      u.email === email && u.password === password && u.provider === "local"
  );
  if (!user) {
    return { success: false, error: "Invalid credentials" };
  }
  setAuthUser(user);
  return { success: true, user };
}

export function mockGoogleAuth(): {
  success: boolean;
  user?: User;
  error?: string;
} {
  // Simulate Google user
  const googleUser: User = {
    username: "GoogleUser",
    email: `user${Math.floor(Math.random() * 10000)}@gmail.com`,
    provider: "google",
    googleId: `${Date.now()}`,
  };
  const users = getUsers();
  if (
    users.some((u) => u.email === googleUser.email && u.provider === "google")
  ) {
    return { success: false, error: "Google account already registered" };
  }
  users.push(googleUser);
  saveUsers(users);
  setAuthUser(googleUser);
  return { success: true, user: googleUser };
}

// Mock StarkNet registration utility (for possible future use)
export function mockStarknetRegister(): { success: boolean; user?: User; error?: string } {
  const starknetAddress = "0x" + Math.floor(Math.random() * 1e16).toString(16);
  const starknetUser: User = {
    username: `starknet_${starknetAddress.slice(-6)}`,
    email: `${starknetAddress}@starknet.io`,
    provider: "starknet",
    starknetAddress,
  };
  const users = getUsers();
  if (users.some((u) => u.starknetAddress === starknetAddress)) {
    return { success: false, error: "StarkNet wallet already registered" };
  }
  users.push(starknetUser);
  saveUsers(users);
  setAuthUser(starknetUser);
  return { success: true, user: starknetUser };
}

export function setAuthUser(user: User) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
}

export function getAuthUser(): User | null {
  const user = localStorage.getItem(AUTH_KEY);
  return user ? JSON.parse(user) : null;
}

export function logoutUser() {
  localStorage.removeItem(AUTH_KEY);
}
