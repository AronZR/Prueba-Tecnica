import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { TareasApp } from './tareasApp';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TareasApp />
  </StrictMode>,
)
