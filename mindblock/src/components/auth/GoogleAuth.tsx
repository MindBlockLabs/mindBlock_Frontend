import { useState } from 'react';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { useAuthStore } from '../../store/useAuthStore';
import styled from 'styled-components';
import { AuthState } from '../../types/auth';

export const GoogleAuth = () => {
  const setUser = useAuthStore((state: AuthState) => state.setUser);
  const [error, setError] = useState<string | null>(null);

  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    try {
      if (!credentialResponse.credential) {
        throw new Error('No credential received');
      }
      
      // Extract user info from the credential response
      const decodedToken = JSON.parse(atob(credentialResponse.credential.split('.')[1]));
      
      setUser({
        id: decodedToken.sub,
        email: decodedToken.email,
        name: decodedToken.name,
        authProvider: 'google',
      });
      
      // Store the token for backend verification
      localStorage.setItem('google_token', credentialResponse.credential);
      setError(null);
    } catch (err) {
      setError('Failed to process Google login');
      console.error('Google login processing failed:', err);
    }
  };

  const handleError = () => {
    setError('Google login failed');
    console.error('Google login failed');
  };

  return (
    <GoogleAuthContainer>
      <GoogleButtonWrapper>
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
          theme="filled_black"
          size="large"
          type="standard"
          shape="pill"
          useOneTap
        />
      </GoogleButtonWrapper>
      {error && <ErrorText>{error}</ErrorText>}
    </GoogleAuthContainer>
  );
};

const GoogleAuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

const GoogleButtonWrapper = styled.div`
  margin: 1rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  
  button {
    width: 100%;
    max-width: 300px;
    transition: transform 0.2s ease;
    
    &:hover {
      transform: scale(1.02);
    }
  }
`;

const ErrorText = styled.div`
  color: #ff4444;
  font-size: 0.9rem;
  text-align: center;
`;