import React from 'react'
import styled from 'styled-components'

const Tag = ({ color, name , removeHandler }) =>
  <Wrapper color={color}>
    { name }
    <RemoveButton onClick={removeHandler}>
      X
    </RemoveButton>
  </Wrapper>

export default Tag

const Wrapper = styled.span`
  color: white;
  padding: 5px 5px 5px 10px;
  border-radius: 2px;
  display: inline-block;
  margin-left: 5px;
  margin-top: 5px;
  box-shadow: 0 0 1px black;
  background: ${props => props.color || `black`};
`
const RemoveButton = styled.span`
  margin-left: 9px;
  cursor: pointer;
  padding: 0 5px;
  border-radius: 2px;
  border: 1px solid white;
`