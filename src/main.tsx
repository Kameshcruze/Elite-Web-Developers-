import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { HeadProvider } from './components/SeoHead';
import App from './App.tsx';
import './index.css';

const rootEl = document.getElementById('root')!;
const app = (
  <HeadProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HeadProvider>
);

const isPrerendered =
  rootEl.hasChildNodes() &&
  rootEl.innerHTML.trim() !== '' &&
  rootEl.innerHTML.trim() !== '<!--app-html-->';

if (isPrerendered) {
  hydrateRoot(rootEl, app);
} else {
  createRoot(rootEl).render(app);
}
