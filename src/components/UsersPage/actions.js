import fetch from '../../services/fetch'
import { createAction } from 'redux-actions'

export const saveUsers = createAction("USERS_PAGE/SAVE_USERS")

export const getData = () => (dispatch, getState) => {

  const { 
    login: {
      user_token
    }
  } = getState()

  fetch({ 
    url: `http://localhost:3000/api/getUsersPage`, 
    method: 'POST',
    body: JSON.stringify({ userId: user_token })
  })
  .then(({ usersInfo }) => {
    dispatch(saveUsers(usersInfo))
  })
  .catch((err) => console.log(err))
}