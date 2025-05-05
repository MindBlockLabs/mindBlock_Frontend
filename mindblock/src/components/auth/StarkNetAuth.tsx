import { useCallback, useState } from 'react';
import { useConnect, useAccount } from '@starknet-react/core';
import styled from 'styled-components';
import { useAuthStore } from '../../store/useAuthStore';
import { Loader2 } from 'lucide-react';
import { AuthState } from '../../types/auth';

export const StarkNetAuth = () => {
  const { connect, connectors } = useConnect();
  const { account } = useAccount();
  const setUser = useAuthStore((state: AuthState) => state.setUser);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleConnect = useCallback(async (connector: any) => {
    setIsConnecting(true);
    setError(null);
    try {
      await connect({ connector });
      
      if (account?.address) {
        setUser({
          id: account.address,
          authProvider: 'starknet',
          walletAddress: account.address,
        });
      }
    } catch (error: any) {
      setError(error.message || 'Failed to connect wallet');
      console.error('Wallet connection failed:', error);
    } finally {
      setIsConnecting(false);
    }
  }, [connect, setUser, account]);

  return (
    <WalletContainer>
      <WalletButtonsContainer>
        {connectors.map((connector) => (
          <WalletButton
            key={connector.id}
            onClick={() => handleConnect(connector)}
            disabled={!connector.available() || isConnecting}
          >
            {isConnecting ? (
              <StyledLoader />
            ) : (
              <>Connect {connector.name}</>
            )}
          </WalletButton>
        ))}
      </WalletButtonsContainer>
      {error && <ErrorText>{error}</ErrorText>}
    </WalletContainer>
  );
};

const WalletContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  align-items: center;
`;

const WalletButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 300px;
`;

const WalletButton = styled.button`
  width: 100%;
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  background: linear-gradient(45deg, var(--color-secondary-glow), #00e5ff);
  color: white;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover:not(:disabled) {
    transform: scale(1.02);
    box-shadow: 0 0 20px rgba(0, 229, 255, 0.3);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StyledLoader = styled(Loader2)`
  animation: spin 1s linear infinite;
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const ErrorText = styled.div`
  color: #ff4444;
  font-size: 0.9rem;
  text-align: center;
`;