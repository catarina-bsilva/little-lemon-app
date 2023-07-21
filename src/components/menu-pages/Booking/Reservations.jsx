import React, { useReducer } from 'react'
import {fetchAPI} from '../../../../BookingAPI'
import './Reservations.css'
import ReservationForm from './ReservationForm'


const Reservations = () => {

  function UpdateTimes(date) {
    return (
        fetchAPI(date)
    );
  }

  const InitializeTime =  fetchAPI(new Date())
  
  const [AvailableTime, dispatch] = useReducer (UpdateTimes, InitializeTime)

  return (
    <main className='Reservations'>
      <h1 className='TiTleSection TitleReservations'>Reservations</h1>
      <ReservationForm AvailableTime={AvailableTime} UpdateTimes={dispatch} />
    </main>
  )
}

export default Reservations