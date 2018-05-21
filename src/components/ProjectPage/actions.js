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

export const changeState = createAction('PROJECT_PAGE/CHANGE_STATUS')

export const startProject = () => (dispatch, getState) => {
  const {
    projectPage: {
      project: {
        info: {
          _id
        } = {}
      } = {}
    } = {}
  } = getState()
  
  fetch({ 
    url: `http://localhost:3000/api/startProject`, 
    method: 'POST',
    body: JSON.stringify({ id: _id })
  }).then(({ error, status }) => 
      error ? 
        alert(error) :
        dispatch(changeState(status))
  )
  .catch((err) => console.log(err))
}

export const pauseProject = () => (dispatch, getState) => {
  const {
    projectPage: {
      project: {
        info: {
          _id
        } = {}
      } = {}
    } = {}
  } = getState()
  
  fetch({ 
    url: `http://localhost:3000/api/pauseProject`, 
    method: 'POST',
    body: JSON.stringify({ id: _id })
  }).then(({ error, status }) => 
      error ? 
        alert(error) :
        dispatch(changeState(status))
  )
  .catch((err) => console.log(err))
}

export const closeProject = () => (dispatch, getState) => {
  const {
    projectPage: {
      project: {
        info: {
          _id
        } = {}
      } = {}
    } = {}
  } = getState()
  
  fetch({ 
    url: `http://localhost:3000/api/closeProject`, 
    method: 'POST',
    body: JSON.stringify({ id: _id })
  }).then(({ error, status }) => 
      error ? 
        alert(error) :
        dispatch(changeState(status))
  )
  .catch((err) => console.log(err))
}
