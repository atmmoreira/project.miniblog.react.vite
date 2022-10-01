import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import MenuNavigation from './components/MenuNavigation';
import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <MenuNavigation />
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
