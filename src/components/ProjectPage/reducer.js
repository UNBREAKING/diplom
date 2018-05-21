import { handleActions } from 'redux-actions'
import { 
  saveProjectInfo,
  changeState
 } from './actions'

const initialState = {
  project: []
}

const projectPage = handleActions({
  [saveProjectInfo]: (state, { payload }) => ({ ...state, project: payload }),
  [changeState]: (state, { payload }) => ({
    ...state, 
    project: { 
      ...state.project, 
      info: { 
        ...state.project.info, 
        status: payload 
      } 
    } 
  })
}, initialState)

export default projectPage