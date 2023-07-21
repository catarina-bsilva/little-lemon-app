import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Order from '../src/components/menu-pages/Order.jsx'
import Reservations from '../src/components/menu-pages/Booking/Reservations.jsx'
import ReservationConfirmation from '../src/components/menu-pages/Booking/ReservationConfirmation.jsx'
import Login from '../src/components/menu-pages/Login.jsx'
import Menu from '../src/components/menu-pages/Menu.jsx'
import Dish from '../src/components/menu-pages/Dish.jsx'
import AboutLittleLemon from './components/main-sections/AboutLittleLemon.jsx'
import './app.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/little-lemon-app'>
      <Header/>
      <Footer/>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/Order" element={<Order />}/>
        <Route path="/Reservations" element={<Reservations />}/>
        <Route path="/ReservationConfirmation" element={<ReservationConfirmation />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Dish" element={<Dish />}/>
        <Route path="/Menu" element={<Menu />}/>
        <Route path="/AboutLittleLemon" element={<AboutLittleLemon />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
