import React from 'react'
import styled from 'styled-components'
import { Head } from '../common' 
import { FieldsContainer } from '../index'
import SkillForm from './SkillForm'
import TechnologyForm from './TechnologyForm'
import JobTitleForm from './JobTitleForm'
import { TagsContainer } from './TagsContainer'

const AdminPage = ({ 
  jobs, 
  skills, 
  technologies,
  removeJobTitle,
  removeSkill,
  removeTechnology 
}) => 
  <Wrapper>
    <Head name="Administration"/>
    <ContentWrapper>
    <FieldsContainer name="Job Titles">
      <JobTitleForm label='Job Title' name='jobTitle'/>
      <TagsContainer tags={ jobs } removeHandler={ removeJobTitle } />
    </FieldsContainer>
    <FieldsContainer name="Core Skills">
      <SkillForm label='Core Skill' name='coreSkill'/>
      <TagsContainer tags={ skills } removeHandler={ removeSkill } />
    </FieldsContainer>
    <FieldsContainer name="Technologies">
      <TechnologyForm label='Project Technology' name='technology'/>
      <TagsContainer tags={ technologies } removeHandler={ removeTechnology } />
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