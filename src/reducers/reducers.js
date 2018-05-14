import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux'

import loginModal from '../components/Login/reducer'
import adminPage from '../components/AdminPage/reducer'

const reducers = combineReducers({
  loginModal,
  adminPage,
  form: reduxFormReducer,
  router: routerReducer
})

export default reducers