import { useMemo } from 'react';
import './App.css'

const CHILD_WEB_URL = 'http://127.0.0.1:5174/';

interface AppProps {
  userName?: string;
}

function App({ userName }: AppProps) {
  const iframeSrc = useMemo(() => {
    return userName 
      ? `${CHILD_WEB_URL}?name=${"SDK-" + encodeURIComponent(userName)}`
      : CHILD_WEB_URL;
  }, [userName]);

  return (
    <>
      <div className="section-sdk">
        <h4>SDK layer</h4>
        <iframe src={iframeSrc} className="iframe-container"></iframe>
      </div>
    </>
  )
}

export default App
