import { createAction } from 'redux-actions'
import fetch from '../../services/fetch'

export const saveJobs = createAction("REGISTRATION_PAGE/SAVE_JOB_TITLES")
export const saveSkills = createAction("REGISTRATION_PAGE/SAVE_CORE_SKILLS")

export const getRegistrationPageData = () => dispatch =>
  fetch({ 
    url: 'http://localhost:3000/getRegistrationPage', 
    method: 'GET'
  })
  .then(({ jobs, skills , technologies }) => {
    dispatch(saveJobs(jobs))
    dispatch(saveSkills(skills))
  })
  .catch((err) => console.log(err))

export const selectSkill = createAction("REGISTRATION_PAGE/SELECT_CORE_SKILL")

export const selectJobTitle = createAction("REGISTRATION_PAGE/SELECT_JOB_TITLE")
