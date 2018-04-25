import React from 'react'
import styled from 'styled-components'
import { Head } from '../common' 
import { FieldsContainer } from '../index'

const AdminPage = () => 
  <Wrapper>
    <Head name="Administration"/>
    <ContentWrapper>
    <FieldsContainer name="Job Titles">
    </FieldsContainer>
    <FieldsContainer name="Core Skills">
    </FieldsContainer>
    <FieldsContainer name="Technologies">
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