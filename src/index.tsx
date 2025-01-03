import { StrictMode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Rate from './components/Rate/Rate';
import ServerPagination from './components/ServerPagination/ServerPagination';

import './index.scss';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);

  root.render(
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/rate" element={<Rate />} />
          <Route path="/pagination/*" element={<ServerPagination />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>,
  );
} else {
  throw new Error('Root element not found :(');
}
