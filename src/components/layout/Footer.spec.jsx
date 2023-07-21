import React from 'react';
import {render, screen} from  '@testing-library/react'
import Footer from './Footer'

describe ('<Footer/>', ()=> {
    it ('should include Home', () => {
        render(<Footer/>)
        const Menu = screen.getByText('Menu')
        expect(Menu).toBeInTheDocument()
    })
})