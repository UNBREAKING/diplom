import React from 'react'
import styled from 'styled-components'
import { Field } from 'redux-form'
import { CommonInput, BlueButton } from '../../common'

const JobTitleForm = ({ label }) =>
  <form>
    <span>
      <Field name="JobTitle" label={label} span type="text" component={CommonInput}/>
    </span>
    <ButtonContainer>
      <BlueButton text='Add' type='submit' />
    </ButtonContainer>
  </form>

export default JobTitleForm 

const ButtonContainer = styled.span`
  margin-left: 20px;
`