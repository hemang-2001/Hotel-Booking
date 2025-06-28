import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './components/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import AllRooms from './pages/AllRooms';
import RoomDetails from './pages/RoomDetails';
import MyBookings from './pages/MyBookings';

const App = () => {

  const isOwnerPath = useLocation().pathname.includes('owner');

  return (
    <div>
     { !isOwnerPath && <Navbar /> }

      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/rooms' element={<AllRooms/>} />
          <Route path='/room/:id' element={<RoomDetails/>} />
          <Route path='/my-bookings' element={<MyBookings/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App