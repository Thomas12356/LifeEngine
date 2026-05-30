import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Provider } from './components/ui/provider.jsx';
import { AuthProvider } from '@context/AuthContext';
import { HomepageProvider } from './context/HomepageContext.jsx';
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <AuthProvider>
        <BrowserRouter>
          <HomepageProvider>
            <App />
          </HomepageProvider>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  </StrictMode>
)
