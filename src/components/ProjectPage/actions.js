import { push } from 'react-router-redux'
import fetch from '../../services/fetch'
import { createAction } from 'redux-actions'

export const saveProjectInfo = createAction('PROJECT_PAGE/SAVE_PROJECT_INFORMATION')

export const getData = (id) => dispatch =>
  fetch({ 
    url: `http://localhost:3000/getProject/${id}`, 
    method: 'GET'
  })
  .then((data) => {
    dispatch(saveProjectInfo(data))
  })
  .catch((err) => console.log(err))