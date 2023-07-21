import React from 'react'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {fetchAPI} from '../../../../BookingAPI'
import {BsArrowLeftCircle} from 'react-icons/bs'

const ReservationForm = (props) => {
    const [SelectedDate, setSelectedDate] = useState("")
    const [Time, setTime] = useState("")
    const [NrPeople, setNrPeople] = useState(0)
    const [Place, setPlace] = useState("")
    const [Comments, setComments] = useState("")
    const [Occasion, setOccasion] = useState("")
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")
    const [ShowForm1, setShowForm1] = useState(true)
    const [ShowForm2, setShowForm2] = useState(false)
    const [FinalTime, setFinalTime] = useState(
      props.AvailableTime.map((times) => <option key={times}>{times}</option>)
    )

    const Navigate = useNavigate()

    const PrevStep = () => {
        setShowForm1(true)
        setShowForm2(false)
    }

    const NextStep = () => {
      setShowForm1(false)
      setShowForm2(true)
    }



    const SubmitForm = async (e) => {
      e.preventDefault()
      const FormData =  {
        "SelectedDate": SelectedDate,
        "Time": Time,
        "NrPeople": NrPeople,
        "Place": Place,
        "Comments": Comments,
        "Occasion": Occasion,
        "Name": Name,
        "Email": Email,
        "Phone": Phone
      }
      console.log(FormData)

      Navigate('/ReservationConfirmation')
      
      setSelectedDate("")
      setTime("")
      setNrPeople(0)
      setPlace("")
      setComments("")
      setOccasion("")
      setName("")
      setEmail("")
      setPhone("")
    }

    const HandleDateChange = (e) => {
      setSelectedDate(e.target.value)

      var stringify = e.target.value
      const date = new Date(stringify)

      props.UpdateTimes(date)

      setFinalTime(props.AvailableTime.map((times) => <option key={times} >{times}</option>))
    }

    const handlePlaceChange = (event) => {
        setPlace(event.target.value)
      }
  return (
    <form >
        <section id='Step1Form' className={`${ShowForm1 ? 'FormActive': 'FormInactive'}`}>
          <div>
            <label htmlFor="date">Date:</label>
            <input type="date" name="date" id="date" value={SelectedDate} required onChange={HandleDateChange}/>
          </div>
          <div>
            <label htmlFor="time">Time:</label>
            <select id="Time" required onChange={(e) => setTime(e.target.value)}>
              {FinalTime}
            </select>
          </div>
          <div>
            <label htmlFor="NrPeople">Number of people:</label>
            <input type="number" name="NrPeople" id="NrPeople" required value={NrPeople} onChange={(e) =>setNrPeople(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="Inside">Inside:</label>
            <input
              type="radio"
              name="Place"
              id="Inside"
              value="Inside"
              checked={Place === "Inside"}
              onChange={handlePlaceChange}
            />
            <label htmlFor="Outside">Outside:</label>
            <input
              type="radio"
              name="Place"
              id="Outside"
              value="Outside"
              checked={Place === "Outside"}
              onChange={handlePlaceChange}
            />
          </div>
          <div>
            <label htmlFor="Occasion">Select Occasion:</label>
            <select name="Occasion" id="Occasion" value={Occasion} required onChange={(e) =>setOccasion(e.target.value)} >
              <option value="Select" defaultValue>---</option>
              <option value="Birthday">Birthday</option>
              <option value="Engagement">Engagement</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <textarea name="Comments" id="Comments" cols="50" rows="10" placeholder='Special wishes...' value={Comments} onChange={(e) =>setComments(e.target.value)}></textarea>
          </div>
          <button className='BtnForm' onClick={NextStep}>
            Next Step
          </button>
          <p>Step 1/2</p>
        </section>
        <section id='Step2Form' className={`${ShowForm2 ? 'FormActive': 'FormInactive'}`}>
          <div id='PrvStep'>
                 <BsArrowLeftCircle id='ArrowBack' onClick={PrevStep}/> <p>Previous Step</p>
             </div>
             <div>
                  <label htmlFor="Name">Name:</label>
                  <input type="text" name="Name" id="Name" value={Name} required onChange={(e) =>setName(e.target.value)} />
              </div>
              <div>
                  <label htmlFor="Email">Email:</label>
                  <input type="email" name="Email" id="Email" value={Email} required onChange={(e) =>setEmail(e.target.value)} />
              </div>
              <div>
                  <label htmlFor="Phone">Phone Number:</label>
                  <input type="number" name="Phone" id="Phone" placeholder='Optional'value={Phone} onChange={(e) =>setPhone(e.target.value)} />
              </div>
              <button id='SubmitButton' className='BtnForm' onClick={SubmitForm}>Submit</button>
              <p>Step 2/2</p>
        </section>
      </form>
  )
}

export default ReservationForm