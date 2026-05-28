import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Poids Inter utilisés dans le design (Regular, Medium, Semi Bold, Bold)
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
