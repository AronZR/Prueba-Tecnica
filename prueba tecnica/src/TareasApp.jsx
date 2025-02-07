import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';
import { AppTheme } from './theme/AppTheme';

export const TareasApp = () => {
  return (
    <BrowserRouter>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </BrowserRouter>
    
  );
}
