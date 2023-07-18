import React from 'react'
import './Main.css'
import LittleLemon from '../main-sections/LittleLemon'
import SectionHighlights from '../main-sections/SectionHighlights'
import SectionTestemonials from '../main-sections/SectionTestemonials'
import AboutLittleLemon from '../main-sections/AboutLittleLemon'


const Main = () => {
  return (
    <main id='Main'>
        <LittleLemon/>
        <SectionHighlights/>
        <SectionTestemonials/>
        <AboutLittleLemon/>
      </main>
  )
}

export default Main