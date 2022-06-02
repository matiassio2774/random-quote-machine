import styled from "styled-components";

export const StyledQuoteBoxDiv = styled.button`
  background-color: white;
  font-family: 'Raleway', sans-serif;
  width: 500px;
  max-width: 500px;
  display: flex;
  padding: 0 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius:5px;
  margin-bottom: 15px;
  p{
    transition: all 0.2s linear;
    font-size: 1.7em;
    font-weight:400;
    color: ${props => props.color};
  }

`