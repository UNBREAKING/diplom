import React from 'react'
import styled from 'styled-components'
import { Head } from '../common' 
import { FieldsContainer } from '../index'
import SkillForm from './SkillForm'
import TechnologyForm from './TechnologyForm'
import JobTitleForm from './JobTitleForm'

const AdminPage = () => 
  <Wrapper>
    <Head name="Administration"/>
    <ContentWrapper>
    <FieldsContainer name="Job Titles">
      <JobTitleForm label='Job Title' name='jobTitle'/>
    </FieldsContainer>
    <FieldsContainer name="Core Skills">
      <SkillForm label='Core Skill' name='coreSkill'/>
    </FieldsContainer>
    <FieldsContainer name="Technologies">
      <TechnologyForm label='Project Technology' name='technology'/>
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