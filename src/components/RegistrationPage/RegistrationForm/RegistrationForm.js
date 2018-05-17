import React from 'react'
import styled from 'styled-components'
import { CommonInput, BlueButton } from '../../common'
import { FieldsContainer } from '../../index'
import JobTitleContainer from '../JobTitleContainer'
import { Field } from 'redux-form'
import Select from 'material-ui/Select';

const RegistrationForm = ({jobs, selectedJobTitle, selectJob }) =>
  <form>
    <FieldsContainer name="Accaunt">
      <Field name="email" label="Email" component={CommonInput} />
      <Field name="password" label="Password" component={CommonInput} />
      <Field name="secondPassword" label="Confirm Password" component={CommonInput} />
    </FieldsContainer>
    <FieldsContainer name="Personal Data">
      <Field name="name" label="Name" component={CommonInput} />
      <Field name="surname" label="Surname" component={CommonInput} />
      <Select
        native
        value={selectedJobTitle}
        onChange={selectJob}
        inputProps={{
          name: 'jobTitle',
          id: 'jobTitle'
        }}>
        { 
          jobs.map(({ name, _id }) => <option key={_id} value={_id}>{ name }</option>)
        }
      </Select>
      <JobTitleContainer />
    </FieldsContainer>
    <FieldsContainer name="Social Networks">
      <Field name="skype" label="Skype" component={CommonInput} />
      <Field name="git" label="GitHub Accaunt" component={CommonInput} />
      <Field name="facebook" label="Facebook" component={CommonInput} />
    </FieldsContainer>
    <ButtonWrapper>
      <BlueButton text="Register"/>
    </ButtonWrapper>
  </form>

export default RegistrationForm

const ButtonWrapper = styled.div`
  border-top: 1px solid #E0E0E0;
  text-align: right;
  padding: 20px 0;
`