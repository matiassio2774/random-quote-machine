import React from 'react'
import { FaTwitter, FaTumblr } from "react-icons/fa";
import { IconContext } from "react-icons";
import { StyledButton } from './styled/Button.styled';
import { StyledAnchor } from './styled/Anchor.styled';
import { StyledButtonsDiv } from './styled/ButtonsDiv.styled';

function Buttons({ newQuote, quote, color }) {
  
  return (
    <IconContext.Provider value={{ color: "white"}}>
      <StyledButtonsDiv className="buttons" color={color}>
        <StyledAnchor 
          id='tweet-quote'
          className="button"
          href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${quote.quote}" - ${quote.author}`}
          target='_blank'
        >
          <FaTwitter />
        </StyledAnchor>
        <StyledAnchor
          id='tumblr-quote'
          className="button"
          href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${quote.author}&content=${quote.quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
          target='_blank'
        >
          <FaTumblr />
        </StyledAnchor>
        <StyledButton
          onClick={newQuote}
          className="button"
          id="new-quote"
        >
          New Quote
        </StyledButton>
      </StyledButtonsDiv>
    </IconContext.Provider>
  )
}

export default Buttons