import React, { useState } from 'react'
import './App.css'
import Footer from './components/Footer';
import QuoteBox from './components/QuoteBox';
import { StyledAppDiv } from './components/styled/App.styled';

function App() {

  const [bgColor, setbgColor] = useState('#f39c12')

  const changeHandler = (color)=>{
    setbgColor(color)
  }

  return (
    <StyledAppDiv 
      className="App"
      color={bgColor}
    >
      <QuoteBox changeHandler={changeHandler}/>
      <Footer />
    </StyledAppDiv>
  )
}

export default App
