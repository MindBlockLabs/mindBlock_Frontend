import { useEffect, useState, createContext, useContext } from 'react';
import { getAuthUser, logoutUser, User } from '../components/authUtils';

interface AuthContextType {
  user: User | null;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({ user: null, logout: () => {} });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(getAuthUser());
    window.addEventListener('storage', () => setUser(getAuthUser()));
    return () => window.removeEventListener('storage', () => setUser(getAuthUser()));
  }, []);

  const logout = () => {
    logoutUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
