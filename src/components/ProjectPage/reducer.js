import { handleActions } from 'redux-actions'
import { 
  saveProjectInfo,
  changeState,
  showOffer,
  hideOffer
 } from './actions'

const initialState = {
  project: [],
  selectedOffer: null
}

const projectPage = handleActions({
  [showOffer]: (state,{ payload }) => ({ ...state, selectedOffer: payload }),
  [hideOffer]: state => ({ ...state, selectedOffer: null }),
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