import React from 'react';
import styled from 'styled-components';

const Message = () => {
  return (
    <StyledWrapper error radius={30}>
      <StyledTitle>Message</StyledTitle>
      <StyledText>Lorem ipsum dolor sit amet consectetur.</StyledText>
      <StyledButton>Tlačítko</StyledButton>
      <StyledButton as="a" href="#">Odkaz</StyledButton>
    </StyledWrapper>
  )
}

export default Message;

const StyledButton = styled.button`
  display: inline-block;
  padding: 0.5em 1em;
  border: 3px solid teal;
  background-color: lightblue;
`

const StyledWrapper = styled.div`
  border: 5px solid ${props => props.error ? 'red' : 'blue'};
  padding: 1em;
  margin: 1em 0;
  border-radius: ${props => props.radius || 8}px;
  background-color: ${props => props.error ? '#ffdddd' : '#ddddff'};
`

const StyledTitle = styled.h1`
  color: red;
  border-bottom: 1px solid red;
`

const StyledText = styled.p`
  font-style: italic;
`