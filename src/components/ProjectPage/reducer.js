import { handleActions } from 'redux-actions'
import { 
  saveProjectInfo,
  changeState,
  showOffer,
  hideOffer,
  selectUser,
  cleanUser,
  updateData
 } from './actions'

const initialState = {
  project: {},
  selectedOffer: null,
  selectedUserForOffer: null,
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
  }),
  [selectUser]: (state,{ payload }) => ({ ...state, selectedUserForOffer: payload }),
  [cleanUser]: state => ({ ...state, selectedUserForOffer: null }),
  [updateData]: (state,{ payload }) => ({ 
    ...state,
    selectedUserForOffer: null,
    project: {
      ...state.project,
      jobsAndUsers: state.project.jobsAndUsers.map(item => item._id === payload._id ? payload : item),
      offers: state.project.offers.map((item,index)=> index === state.selectedOffer ? [] : item )
    }
  })
}, initialState)

export default projectPage