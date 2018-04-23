import React from 'react'
import styled from 'styled-components'

const FieldsContainer = ({ name, children}) =>
  <Wrapper>
    <Title>
      { name }
    </Title>
    <Content>
    { children }
    </Content>
  </Wrapper>

export default FieldsContainer

const Wrapper = styled.div`
  width: 100%;
  border-top: 1px solid #E0E0E0;
`

const Title = styled.h3`
  color: #003F61;
  font-family: 'Roboto Regular';
  text-align: right;
`

const Content = styled.div`
  padding: 0 0 20px;
`