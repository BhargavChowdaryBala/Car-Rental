import Navbar from './components/Navbar';
import React ,  { useState } from 'react';
import { useLocation ,Routes} from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Cars from './pages/Cars';
import CarDetails from './pages/CarDetails';
import MyBookings from './pages/MyBookings';
import Footer from './components/Footer';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath=useLocation().pathname.startsWith('/owner');
  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin}/>}


      <Routes>
          <Route path='/' element={<Home/>}/>
          
          <Route path='/cars-details/:id' element={<CarDetails/>}/>
          <Route path='/cars' element={<Cars/>}/>
          <Route path='/my-bookings' element={<MyBookings/>}/>
      </Routes>




      <Footer />
    </>
  )
}

export default App
