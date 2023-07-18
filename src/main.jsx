import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Order from '../src/components/menu-pages/Order.jsx'
import Reservations from '../src/components/menu-pages/Reservations.jsx'
import Login from '../src/components/menu-pages/Login.jsx'
import Menu from '../src/components/menu-pages/Menu.jsx'
import Dish from '../src/components/menu-pages/Dish.jsx'
import AboutLittleLemon from './components/main-sections/AboutLittleLemon.jsx'
import './app.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/little-lemon-app'>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/Order" element={<Order />}/>
        <Route path="/Reservations" element={<Reservations />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Dish" element={<Dish />}/>
        <Route path="/Menu" element={<Menu />}/>
        <Route path="/AboutLittleLemon" element={<AboutLittleLemon />}/>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
)
