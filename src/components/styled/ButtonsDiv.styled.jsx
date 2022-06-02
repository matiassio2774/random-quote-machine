import styled from "styled-components";

export const StyledButtonsDiv = styled.button`
  padding: 0;
  display: block;
  width: 100%;
  height: 100px;
  align-items: center;
  border: 0px;
  background-color: white;
  button {
    background-color: ${props => props.color};
  }
`