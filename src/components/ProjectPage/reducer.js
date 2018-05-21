import { handleActions } from 'redux-actions'
import { 
  saveProjectInfo
 } from './actions'

const initialState = {
  project: []
}

const projectPage = handleActions({
  [saveProjectInfo]: (state, { payload }) => ({ ...state, project: payload }),
}, initialState)

export default projectPage