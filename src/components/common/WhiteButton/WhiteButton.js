import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const WhiteButton = ({ onClick, text }) =>
  <Button onClick={onClick}>
    {text}
  </Button>

WhiteButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string
}

export default WhiteButton

const Button = styled.button`
  background: white;
  color: #003F61;
  font-size: 20px;
  font-family: 'Roboto Light';
  padding: 10px 30px;
  border: 1px solid #A6A6A6;
  border-radius: 2px;
  cursor: pointer;
  :hover {
    background: #F0F0F0;
  }
`