import React from 'react'
import styled from 'styled-components'
import { Head } from '../common' 
import { FieldsContainer } from '../index'
import { InputWithColorPicker } from './InputWithColorPicker'

const AdminPage = () => 
  <Wrapper>
    <Head name="Administration"/>
    <ContentWrapper>
    <FieldsContainer name="Job Titles">
      <InputWithColorPicker label='Job Title'/>
    </FieldsContainer>
    <FieldsContainer name="Core Skills">
      <InputWithColorPicker label='Core Skill'/>
    </FieldsContainer>
    <FieldsContainer name="Technologies">
      <InputWithColorPicker label='Project Technology'/>
    </FieldsContainer>
    </ContentWrapper>
  </Wrapper>

export default AdminPage

const Wrapper = styled.div`
  width: 100%;
`

const ContentWrapper = styled.div`
  padding: 0 20px;
`