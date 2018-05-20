import fetch from '../../services/fetch'
import { createAction } from 'redux-actions'
import { push } from 'react-router-redux'

export const saveJobs = createAction("CREATE_PROJECT_PAGE/SAVE_JOB_TITLES")
export const saveTechnologies = createAction("CREATE_PROJECT_PAGE/SAVE_TECHNOLOGIES")

export const getCreateProjectPageData = () => dispatch =>
  fetch({ 
    url: 'http://localhost:3000/getCreateProjectPage', 
    method: 'GET'
  })
  .then(({ jobs , technologies }) => {
    dispatch(saveJobs(jobs))
    dispatch(saveTechnologies(technologies))
  })
  .catch((err) => console.log(err))

export const saveTechnology = createAction("CREATE_PROJECT_PAGE/SAVE_TECHNOLOGY")
export const unsaveTechnology = createAction("CREATE_PROJECT_PAGE/UNSAVE_TECHNOLOGY")

export const selectTechnology = (_id) => (dispatch, getState) => {
  const {
    createProjectPage: {
      selectedTechnologies
    }
   } = getState()

   selectedTechnologies.includes(_id) ?
    dispatch(unsaveTechnology(_id)) :
    dispatch(saveTechnology(_id))
}

export const saveJob = createAction('CREATE_PROJECT_PAGE/SAVE_JOB')
export const unsaveJob = createAction('CREATE_PROJECT_PAGE/UNSAVE_JOB')

export const cleanData = createAction('CREATE_PROJECT_PAGE/CLEAN_DATA')

export const createProject = () => (dispatch, getState) => {

  const {
    login: {
      user_token
    },
    form: {
      createProject: {
        values = {}
      } = {}
    },
    createProjectPage: {
      selectedTechnologies,
      savedJobs
    }
  } = getState()

  fetch({
    url: 'http://localhost:3000/api/createProject', 
    method: 'POST',
    body: JSON.stringify({ ...values, selectedTechnologies , savedJobs, owner: user_token })
  })
  .then(({ error }) => {
    if ( error ) {
      alert( error )
    } else {
      dispatch(cleanData())
      dispatch(push('/projects'))
    }
  })
  .catch((err) => console.log(err))

}