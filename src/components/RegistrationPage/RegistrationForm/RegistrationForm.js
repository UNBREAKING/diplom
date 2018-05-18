import React from 'react'
import styled from 'styled-components'
import { 
  CommonInput, 
  BlueButton, 
  CommonSelect, 
  CommonPassword 
} from '../../common'
import { FieldsContainer } from '../../index'
import SkillContainer from '../SkillContainer'
import { Field } from 'redux-form'

const RegistrationForm = ({ jobs, register }) =>
  <form>
    <FieldsContainer name="Accaunt">
      <Field name="email" label="Email" component={CommonInput} />
      <Field name="password" id="password" label="Password" component={CommonPassword} />
      <Field name="secondPassword" id="confirmPassword" label="Confirm Password" component={CommonPassword} />
    </FieldsContainer>
    <FieldsContainer name="Personal Data">
      <Field name="name" label="Name" component={CommonInput} />
      <Field name="surname" label="Surname" component={CommonInput} />
      <Field name="job" id="jobSelector" label="Job Title" component={CommonSelect} >
        <option value=""></option>
        { 
          jobs.map(({ name, _id }) => <option key={_id} value={_id}>{ name }</option>)
        }
      </Field>
      <SkillContainer />
    </FieldsContainer>
    <FieldsContainer name="Social Networks">
      <Field name="skype" label="Skype" component={CommonInput} />
      <Field name="git" label="GitHub Accaunt" component={CommonInput} />
      <Field name="facebook" label="Facebook" component={CommonInput} />
    </FieldsContainer>
    <ButtonWrapper>
      <BlueButton text="Register" onClick={register}/>
    </ButtonWrapper>
  </form>

export default RegistrationForm

const ButtonWrapper = styled.div`
  border-top: 1px solid #E0E0E0;
  text-align: right;
  padding: 20px 0;
`