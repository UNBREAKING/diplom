import React from 'react'
import styled from 'styled-components'
import { Head, BlueButton } from '../common'
import CreateProjectForm from './CreateProjectForm'

const CreateProjectPage = ({ createProject }) => 
  <Wrapper>
    <Head name="Create Project" />
    <FormWrapper>
      <CreateProjectForm />
    </FormWrapper>
    <ButtonWrapper>
      <BlueButton text="Save Project" onClick={createProject}/>
    </ButtonWrapper>
  </Wrapper>

export default CreateProjectPage

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 20px 0;
`

const FormWrapper = styled.div`
  border-top: 1px solid #E0E0E0;
  padding: 20px 20px;
  border-bottom: 1px solid #E0E0E0;
`

const ButtonWrapper = styled.div`
  text-align: right;
  padding: 20px 0;
`
