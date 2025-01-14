import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import ThisApp from './components/ThisApp/ThisApp';
import ServerPagination from './components/ServerPagination/ServerPagination';
import AboutMe from './components/AboutMe/AboutMe';

import './index.scss';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);

  root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/this-app" element={<ThisApp />} />
        <Route path="/zsiga" element={<AboutMe />} />
        <Route path="/pagination/*" element={<ServerPagination />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>,
  );
} else {
  throw new Error('Root element not found :(');
}
