import React from 'react'
import { Field } from 'redux-form'
import { CommonInput, CommonTextField } from '../../common'
import TechnologiesContainer from '../TechnologiesContainer'

const CreateProjectForm = () =>
  <form>
    <Field name="name" label="Project Name" component={CommonInput} />
    <Field name="description" label="Description" component={CommonTextField} />
    <Field name="git" label="Github Link" component={CommonInput} />
    <Field name="facebook" label="Facebook Page" component={CommonInput} />
    <TechnologiesContainer />
  </form>

export default CreateProjectForm