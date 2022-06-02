import React, { useState, useEffect } from 'react'
import QuoteText from './QuoteText';
import QuoteAuthor from './QuoteAuthor';
import Buttons from './Buttons';
import { StyledQuoteBoxDiv } from './styled/QuoteBoxDiv.styled';


function QuoteBox({ changeHandler }) {

  // Frase random
  const [quote, setQuote] = useState([]);
  // Click Handler
  const [click, setClick] = useState(false);
  // Random Color
  const [color, setColor] = useState('#f39c12')

  var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

  useEffect(() => {
    const randomQuoteIndex = Math.floor(Math.random() * 101);

    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(res => res.json())
      .then(data => setQuote(data.quotes[randomQuoteIndex]))

    const randomColor = Math.floor(Math.random() * 10);
    setColor(colors[randomColor])
    
  }, [click])

  const newQuote = () => {
    setClick(!click)
  }

  changeHandler(color)

  return (
    <StyledQuoteBoxDiv
      className="quote-box"
      color={color}
    >
      <QuoteText quote={quote.quote} />
      <QuoteAuthor author={quote.author}/>
      <Buttons
        newQuote={newQuote}
        quote={quote}
        color={color}
      />
    </StyledQuoteBoxDiv>
  )
}

export default QuoteBox