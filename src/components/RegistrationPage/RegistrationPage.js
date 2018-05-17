import React from 'react'
import styled from 'styled-components'
import { Head } from '../common'
import RegistrationForm from './RegistrationForm'
const RegistrationPage = () =>
  <Wrapper>
    <Head name="REGISTRATION" />
    <FieldsContent>
      <RegistrationForm />
    </FieldsContent>
  </Wrapper>

export default RegistrationPage

const Wrapper = styled.div`
  width: 100%;
`
const FieldsContent = styled.div`
  padding: 0 20px;
`
