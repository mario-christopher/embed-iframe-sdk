import { useState, useEffect } from 'react';
import './App.css';
import MetaMaskButton from './components/MetaMaskButton';

function App() {
  const [accountAddress, setAccountAddress] = useState<string>('');
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    // Get name parameter from URL
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    if (name) {
      setUserName(decodeURIComponent(name));
    }
  }, []);

  const handleAccountChange = (account: string | null) => {
    setAccountAddress(account || '');
  };

  return (
    <>
        {userName && (
          <div className="user-name-label">
            <label>Welcome, {userName}!</label>
          </div>
        )}
        <div className="erc20-input-container">
          <label htmlFor="erc20-address" className="erc20-input-label">ERC20 Address:</label>
          <input
            id="erc20-address"
            type="text"
            className="input-field erc20-input-field"
            placeholder="0x..."
            value={accountAddress}
            readOnly
          />
          <MetaMaskButton onAccountChange={handleAccountChange} />
        </div>
    </>
  )
}

export default App
