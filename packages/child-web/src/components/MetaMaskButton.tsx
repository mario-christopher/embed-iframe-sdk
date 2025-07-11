import { useState, useEffect } from 'react';

interface MetaMaskButtonProps {
  onAccountChange: (account: string | null) => void;
}

const MetaMaskButton: React.FC<MetaMaskButtonProps> = ({ onAccountChange }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState<string | null>(null);

  useEffect(() => {
    // Check if MetaMask is installed
    if (window.ethereum) {
      // Check if already connected
      checkConnection();
    }
  }, []);

  const checkConnection = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setIsConnected(true);
          onAccountChange(accounts[0]);
        }
      }
    } catch (error) {
      console.error('Error checking MetaMask connection:', error);
    }
  };

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ 
          method: 'eth_requestAccounts' 
        });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setIsConnected(true);
          onAccountChange(accounts[0]);
        }
      } else {
        alert('Please install MetaMask!');
      }
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };

  const disconnectWallet = async () => {
    try {
      // Revoke permissions from MetaMask
      if (window.ethereum) {
        await window.ethereum.request({
          method: "wallet_revokePermissions",
          params: [
            {
              eth_accounts: {},
            },
          ],
        });
      }
    } catch (error) {
      console.error('Error revoking MetaMask permissions:', error);
    }
    
    setAccount(null);
    setIsConnected(false);
    onAccountChange(null);
  };

  return (
    <button
      type="button"
      className="add-token-btn"
      onClick={isConnected ? disconnectWallet : connectWallet}
    >
      {isConnected ? 'Disconnect' : 'Connect'}
    </button>
  );
};

export default MetaMaskButton; 