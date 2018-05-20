import React from 'react'
import styled, { css } from 'styled-components'

const Tag = ({ color, name , selectHandler, isSelected }) =>
  <Wrapper color={color} onClick={selectHandler} isSelected={isSelected}>
    { name }
  </Wrapper>

export default Tag

const Wrapper = styled.span`
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 2px;
  display: inline-block;
  margin-left: 5px;
  margin-top: 5px;
  box-shadow: 0 0 1px black;
  background: ${props => props.color || `black`};
  ${props => props.isSelected && css`
    border: 1px solid #003F61;
  `}
`
