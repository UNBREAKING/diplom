import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux'

import login from '../components/Login/reducer'
import adminPage from '../components/AdminPage/reducer'
import registrationPage from '../components/RegistrationPage/reducer'
import createProjectPage from '../components/CreateProjectPage/reducer'

const reducers = combineReducers({
  login,
  adminPage,
  registrationPage,
  createProjectPage,
  form: reduxFormReducer,
  router: routerReducer
})

export default reducers