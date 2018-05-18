import { createAction } from 'redux-actions'
import fetch from '../../services/fetch'
import { push } from 'react-router-redux'
import { setUserToken } from '../Login/actions'

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

export const saveError = createAction("REGISTRATION_PAGE/SAVE_ERROR")
export const cleanError = createAction("REGISTRATION_PAGE/CLEAN_ERROR")

export const register = () => (dispatch, getState) => {
  const {
    registrationPage: {
      selectedSkill: { 
        _id 
      } = {}
    },
    form: {
      registration: {
        values = {}
      } = {}
    } = {}
  } = getState()

  fetch({ 
    url: 'http://localhost:3000/api/registration', 
    method: 'POST',
    body: JSON.stringify({ ...values, skill: _id })
  })
  .then(({ error }) => {
      if( error ){
        dispatch(saveError(error))
      } else {
        dispatch(setUserToken())
        dispatch(push('/projects'))
        dispatch(cleanError())
      }
  })
  .catch((err) => console.log(err))
}