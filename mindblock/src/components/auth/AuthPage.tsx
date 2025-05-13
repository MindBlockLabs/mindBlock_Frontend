import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GoogleAuth } from './GoogleAuth';
import { StarkNetAuth } from './StarkNetAuth';
import { useAuthStore } from '../../store/useAuthStore';
import { AuthState } from '../../types/auth';

// the Authpage component is the main entry point for authentication

export const AuthPage = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state: AuthState) => state.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <AuthContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AuthCard>
        <Title>Welcome to MindBlock</Title>
        <Description>Choose your preferred login method</Description>
        
        <AuthMethodsContainer>
          <AuthSection>
            <SectionTitle>Sign in with Google</SectionTitle>
            <GoogleAuth />
          </AuthSection>
          
          <Divider>
            <span>or</span>
          </Divider>
          
          <AuthSection>
            <SectionTitle>Connect Wallet</SectionTitle>
            <StarkNetAuth />
          </AuthSection>
        </AuthMethodsContainer>
      </AuthCard>
    </AuthContainer>
  );
};

const AuthContainer = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const AuthCard = styled.div`
  background: rgba(18, 18, 18, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 2.5rem;
  width: 100%;
  max-width: 480px;
  box-shadow: 0 4px 30px rgba(0, 229, 255, 0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0.5rem;
  font-family: var(--font-primary);
  background: linear-gradient(90deg, var(--color-secondary-glow), #00e5ff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  color: #ccc;
  text-align: center;
  margin-bottom: 2rem;
`;

const AuthMethodsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const AuthSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.1rem;
  color: #fff;
  font-weight: 500;
  text-align: center;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: #666;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #333;
  }
  
  span {
    margin: 0 10px;
    font-size: 0.9rem;
  }
`;