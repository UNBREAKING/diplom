import React from 'react'
import { Field } from 'redux-form'
import { CommonInput, CommonTextField } from '../../common'
import TechnologiesContainer from '../TechnologiesContainer'
import Select from  '../Select'
import JobsContainer from '../JobsContainer'

const CreateProjectForm = ({ jobs }) =>
  <form>
    <Field name="name" label="Project Name" component={CommonInput} />
    <Field name="description" label="Description" component={CommonTextField} />
    <Field name="git" label="Github Link" component={CommonInput} />
    <Field name="facebook" label="Facebook Page" component={CommonInput} />
    <TechnologiesContainer />
    <Field name="job" id="jobSelector" label="Job Title" component={Select}>
      <option value=""></option>
      { 
        jobs.map(({ name, _id }) => <option key={_id} value={_id}>{ name }</option>)
      }
    </Field>
    <JobsContainer />
  </form>

export default CreateProjectForm