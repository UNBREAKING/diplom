import React from 'react'
import styled from 'styled-components'
import { Head, CommonInput, BlueButton } from '../common'
import { FieldsContainer } from '../index'

const RegistrationPage = () =>
  <Wrapper>
    <Head name="REGISTRATION" />
    <FieldsContent>
      <FieldsContainer name="Accaunt">
        <CommonInput label="Email" />
        <CommonInput label="Password" />
        <CommonInput label="Confirm Password" />
      </FieldsContainer>
      <FieldsContainer name="Personal Data">
        <CommonInput label="Name" />
        <CommonInput label="Surname" />
        <CommonInput label="Job Title" />
      </FieldsContainer>
      <FieldsContainer name="Social Networks">
        <CommonInput label="Skype" />
        <CommonInput label="GitHub Accaunt" />
        <CommonInput label="Facebook" />
      </FieldsContainer>
      <ButtonWrapper>
        <BlueButton text="Register"/>
      </ButtonWrapper>
    </FieldsContent>
  </Wrapper>

export default RegistrationPage

const Wrapper = styled.div`
  width: 100%;
`
const FieldsContent = styled.div`
  padding: 0 20px;
`
const ButtonWrapper = styled.div`
  border-top: 1px solid #E0E0E0;
  text-align: right;
  padding: 20px 0;
`