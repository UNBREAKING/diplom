import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ContentBlock = ({ right = false }) =>
  <Wrapper>
    <TextContent right={right}>
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test TestTest TestTest Test Test TestTest Test Test Test Test Test Test Test
      Test Test Test Test Test TestTest TestTest TestTest TestvTest Test Test Test Test Test Test Test
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test TestTest TestTest Test Test TestTest Test Test Test Test Test Test Test
      Test Test Test Test Test TestTest TestTest TestTest TestvTest Test Test Test Test Test Test Test
    </TextContent>
  </Wrapper>

ContentBlock.propTypes = {
  right: PropTypes.bool
}

export default ContentBlock

const Wrapper = styled.div`
  padding: 40px 40px;
  background: white;
  border-top: 1px solid #E0E0E0;
`

const TextContent = styled.div`
  color: #041A3A;
  font-size: 20px;
  font-family: 'Roboto Regular';
  width: 30%;
  margin-left: ${props => props.right ? '65%' : '0'};
  text-align: left;
`