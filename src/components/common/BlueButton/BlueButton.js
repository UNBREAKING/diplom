import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const BlueButton = ({ onClick, text }) =>
    <Button onClick={ onClick }>
        { text }
    </Button>

BlueButton.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string
}

export default BlueButton

const Button = styled.button`
    background: #003F61;
    color: white;
    font-size: 20px;
    font-family: 'Roboto Light';
    padding: 10px 30px;
    border: 1px solid #A6A6A6;
    border-radius: 2px;
    cursor: pointer;
    :hover {
        background: #01314C;
    }
`