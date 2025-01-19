import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer.tsx';
import Header from './components/Header/Header.tsx';
import './index.css';
import App from './pages/App/App.tsx';
import NotFound from './pages/NotFound/NotFound.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
);
