import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Title } from '../common'

const OfferBlock = ({ name }) => 
  <Wrapper>
    <Title>
      { name }
    </Title>
  </Wrapper>

OfferBlock.propTypes = {
  name: PropTypes.string
}

export default OfferBlock

const Wrapper = styled.div`
  margin: 10px 0;
  padding: 5px 20px 15px;
  background: #F7F7F7;
  box-shadow: 0 0 1px black;
`