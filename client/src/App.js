import './App.css';
import './index.css';
import Carousal from './components/Carousal';
import Navbar from './components/Navbar';
import Card from './components/Card';
import { BrowserRouter, Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Rooms from './components/Rooms';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import { useEffect } from 'react';
import Bookingscreen from './screens/Bookingscreen';

function App() {

  const RedirectToHome = () => {
    const navigate = useNavigate();
    useEffect(() => {
      navigate('/login');
    }, [navigate]);
    return null;
  };

  return (
    <>
      <Navbar credential={localStorage.getItem('currentuser') ? '' : 'login'} />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {localStorage.getItem('currentuser') && <Route path='/rooms' element={<Rooms />} />}
          <Route path='/register' element={<Registerscreen />} />
          {!localStorage.getItem('currentuser') && <Route path='/login' element={<Loginscreen />} />}
          <Route path='/gallery' element={<Carousal />} />
          <Route path='/about' element={<About />} />
          <Route path='/rooms/booking/:id/:fromdate/:todate' element={<Bookingscreen />} />
          {/* <Route path='*' element={<RedirectToHome />} /> */}
          <Route path='*' element={<Navigate to='/register' />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
