import { useGoogleLogin } from '@react-oauth/google';
import { useAuthStore } from '../../store/useAuthStore';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const GoogleAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const setUser = useAuthStore((state) => state.setUser);

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      setIsLoading(true);
      setError(null);
      
      // TODO: Send token to backend for verification
      // For now, we'll just store the token and user info
      fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: `Bearer ${tokenResponse.access_token}` }
      })
        .then(res => res.json())
        .then(data => {
          setUser({
            id: data.sub,
            email: data.email,
            name: data.name,
            authProvider: 'google'
          });
        })
        .catch(err => {
          setError('Failed to fetch user information');
          console.error('Google auth error:', err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    onError: (error) => {
      setError('Google authentication failed');
      console.error('Google auth error:', error);
    }
  });

  return (
    <AuthButton
      onClick={() => login()}
      disabled={isLoading}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <GoogleIcon />
          <span>Continue with Google</span>
        </>
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </AuthButton>
  );
};

const AuthButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const GoogleIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS0xLjctMS4yVjloM3Y2aDYuNXYtM2gtM2wtLjEtM2gtM3YtM2g0LjFsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiMzNEI4NTMiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik0zIDEzYy0yLjQgMC00LjUtLjgtNi0yLjJsMy0yLjJhNS40IDUuNCAwIDAgMSAxLjctMS4yVjloM3Y2aC02LjV2LTNoM2wuMS0zaDN2LTNoLTQuMWwuMS0xLjhIM3YzLjRoNC44QzcuNiAxMiA3IDEzIDYuMSAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiNGQkJDMDQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik0zIDMuMXYxLjJoNC44QzcuNiA0LjQgNyA1LjQgNi4xIDYuMXYyLjJoM2wtLjEgM2gtM3YzaDQuMWwuMSAxLjhIM3YtMy40aC0zVjkuMmgzVjZoLTN2LTEuMmgzeiIgZmlsbD0iI0VBNDM1NSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPg==');
  background-size: contain;
  background-repeat: no-repeat;
`;

const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const ErrorMessage = styled.div`
  color: #ff4444;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  text-align: center;
`;