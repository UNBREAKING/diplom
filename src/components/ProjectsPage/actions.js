import { push } from 'react-router-redux'
import fetch from '../../services/fetch'
import { createAction } from 'redux-actions'

export const navigateToCreateProjectPage = () => dispatch => dispatch(push('/create-project'))

export const saveProjects = createAction('PROJECTS_PAGE/SAVE_PROJECTS')

export const getData = () => dispatch =>
  fetch({ 
    url: 'http://localhost:3000/getProjects', 
    method: 'GET'
  })
  .then((data) => {
    dispatch(saveProjects(data))
  })
  .catch((err) => console.log(err))