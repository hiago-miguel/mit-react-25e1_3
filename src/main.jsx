import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';  // Importando o Provider
import store from './redux/store';  // Caminho correto para o seu store
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>  {/* Envolva a aplicação com o Provider aqui */}
      <App />
    </Provider>
  </StrictMode>,
);
