import React from 'react'
import styled from 'styled-components'

const Head = ({name}) =>
  <Wrapper>
    <Title>
      {name}
    </Title>
  </Wrapper>

export default Head

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`

const Title = styled.h1`
  color: #003F61;
  font-family: 'Roboto Regular';
`