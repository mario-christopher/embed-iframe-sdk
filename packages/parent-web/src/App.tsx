import { useState, useMemo, useCallback, useEffect } from 'react';
import { App as SdkApp } from "child-sdk";
import './App.css'

const CHILD_WEB_URL = 'http://127.0.0.1:5174/';

function App() {
  const [userName, setUserName] = useState<string>('');
  const [debouncedUserName, setDebouncedUserName] = useState<string>('');

  const handleNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  }, []);

  // Debounce the userName to prevent iframe flashing
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedUserName(userName);
    }, 500);

    return () => clearTimeout(timer);
  }, [userName]);

  const iframeSrc = useMemo(() => {
    return debouncedUserName 
      ? `${CHILD_WEB_URL}?name=${encodeURIComponent(debouncedUserName)}`
      : CHILD_WEB_URL;
  }, [debouncedUserName]);

  return (
    <>
      <div>
        <div className="project-header">
          <img src="/vite.svg" alt="embed-iframe-sdk logo" className="project-logo" />
          <span className="project-title">Embed content using iFrame or SDK wrapper over iFrame</span>
        </div>
        <div className="section-container">
          <h2>Parent Web Site</h2>
          <div className="name-input-container">
            <label htmlFor="name-address" className="name-input-label">Full Name:</label>
            <input
              id="name-address"
              type="text"
              className="input-field name-input-field"
              placeholder="John Doe ..."
              value={userName}
              onChange={handleNameChange}
            />
          </div>

          <div className="section-container section-child-web">
            <h3>Child Web Site (iFrame)</h3>
            <iframe src={iframeSrc} className="iframe-container"></iframe>
          </div>

          <div className="section-container section-child-sdk">
            <h3>Child Web Site (SDK -&gt; iFrame)</h3>
            <SdkApp userName={debouncedUserName} />
          </div>

        </div>
      </div>
    </>
  )
}

export default App
