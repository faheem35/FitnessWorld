// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'
// import './bootstrap.min.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
//   </StrictMode>,
// )


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';
import './bootstrap.min.css';
import App from './App.jsx';
import ContextApi from './contexts/ContextApi.jsx';
import AuthContextAPI from './contexts/AuthContextAPI.jsx';


const CLIENT_ID = "577357018391-qck538dqr1v47rbfq2j9d9bt2kd1b1tt.apps.googleusercontent.com"// Replace with your actual Google Client ID

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
     <AuthContextAPI>
        <ContextApi>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ContextApi>
     </AuthContextAPI>
    </GoogleOAuthProvider>
  </StrictMode>
);
