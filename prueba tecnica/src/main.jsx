import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { TareasApp } from './tareasApp';
import { Provider } from 'react-redux';
import { store } from './store/store';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
      <BrowserRouter>
        <TareasApp />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
