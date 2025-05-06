import { useConnect, useAccount } from '@starknet-react/core';
import { useAuthStore } from '../../store/useAuthStore';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const StarkNetAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { connect, connectors } = useConnect();
  const { address, isConnected } = useAccount();
  const setUser = useAuthStore((state) => state.setUser);

  const handleConnect = async (connector: any) => {
    try {
      setIsLoading(true);
      setError(null);
      
      await connect({ connector });
      
      if (address) {
        setUser({
          walletAddress: address,
          authProvider: 'starknet'
        });
      }
    } catch (err) {
      setError('Failed to connect wallet');
      console.error('Wallet connection error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <WalletContainer>
      {connectors.map((connector) => (
        <WalletButton
          key={connector.id}
          onClick={() => handleConnect(connector)}
          disabled={isLoading || isConnected}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <WalletIcon>
                {connector.id === 'argentX' ? 'A' : 'B'}
              </WalletIcon>
              <span>
                {isConnected ? 'Connected' : `Connect ${connector.name}`}
              </span>
            </>
          )}
        </WalletButton>
      ))}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {isConnected && address && (
        <ConnectedAddress>
          Connected: {`${address.slice(0, 6)}...${address.slice(-4)}`}
        </ConnectedAddress>
      )}
    </WalletContainer>
  );
};

const WalletContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const WalletButton = styled(motion.button)`
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

const WalletIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  font-weight: 600;
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
  text-align: center;
`;

const ConnectedAddress = styled.div`
  color: #00e5ff;
  font-size: 0.875rem;
  text-align: center;
  margin-top: 0.5rem;
`;