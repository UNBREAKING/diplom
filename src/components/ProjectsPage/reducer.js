import { handleActions } from 'redux-actions'
import { 
  saveProjects
 } from './actions'

const initialState = {
  projects: []
}

const projectsPage = handleActions({
  [saveProjects]: (state, { payload }) => ({ ...state, projects: payload }),
}, initialState)

export default projectsPage