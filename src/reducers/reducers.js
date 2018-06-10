import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux'

import login from '../components/Login/reducer'
import adminPage from '../components/AdminPage/reducer'
import registrationPage from '../components/RegistrationPage/reducer'
import createProjectPage from '../components/CreateProjectPage/reducer'
import projectsPage from '../components/ProjectsPage/reducer'
import projectPage from '../components/ProjectPage/reducer'
import usersPage from '../components/UsersPage/reducer'

const reducers = combineReducers({
  login,
  adminPage,
  registrationPage,
  createProjectPage,
  projectsPage,
  projectPage,
  usersPage,
  form: reduxFormReducer,
  router: routerReducer
})

export default reducers