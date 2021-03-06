import { push } from 'react-router-redux'
import fetch from '../../services/fetch'
import { createAction } from 'redux-actions'

export const saveProjectInfo = createAction('PROJECT_PAGE/SAVE_PROJECT_INFORMATION')

export const getData = id => dispatch =>
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

export const sendOffer = offerId => (dispatch, getState) => {
  const {
    login: {
      user_token
    }
  } = getState()

  fetch({ 
    url: `http://localhost:3000/api/sendOffer`, 
    method: 'POST',
    body: JSON.stringify({ offerId, userId: user_token})
  }).then(({ error }) => 
      error ? 
        alert(error) :
        alert('Offer sent successfull')
  )
  .catch((err) => console.log(err))

}

export const showOffer = createAction("PROJECT_PAGE/SHOW_OFFERS")

export const hideOffer = createAction("PROJECT_PAGE/HIDE_OFFERS")

export const selectUser = createAction("PROJECT_PAGE/SELECT_USER_ID")
export const cleanUser = createAction("PROJECT_PAGE/CLEAN_USER_ID")

export const updateData = createAction("PROJECT_PAGE/UPDATE_DATA")

export const chooseUserForJob = () => (dispatch, getState) => {
  const {
    projectPage: {
      selectedOffer,
      project: { jobsAndUsers },
      selectedUserForOffer
    }
  } = getState()

  Number.isInteger(selectedOffer) && selectedUserForOffer ?
  fetch({ 
    url: `http://localhost:3000/api/chooseUserForJob`, 
    method: 'POST',
    body: JSON.stringify({ offerId: jobsAndUsers[selectedOffer]._id, userId: selectedUserForOffer})
  }).then((data) => {
    if(data.error) {
      alert(data.error)
    } else {
      dispatch(updateData(data))
      dispatch(hideOffer())
    }
  })
  .catch((err) => console.log(err)) :
  alert('Plase choose user')

}