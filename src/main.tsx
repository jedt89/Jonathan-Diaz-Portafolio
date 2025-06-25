import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HeroUIProvider } from '@heroui/react';
import { ModalContextProvider } from './context/ModalContext';
import App from './App.tsx';
import './App.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </HeroUIProvider>
  </StrictMode>
);
