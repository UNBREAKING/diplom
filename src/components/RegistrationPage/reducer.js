import { handleActions } from 'redux-actions'
import { 
  saveJobs, 
  saveSkills,
  selectSkill,
  saveError,
  cleanError
 } from './actions'

const initialState = {
  jobs: [],
  skills: [],
  selectedSkill : {},
  error: null
}

const registrationPage = handleActions({
  [saveJobs]: (state, { payload }) => ({ ...state, jobs: payload }),
  [saveSkills]: (state, { payload }) => ({ ...state, skills: payload }),
  [selectSkill]: (state, { payload }) => 
    ({ ...state, selectedSkill: state.skills.find(({ _id }) => _id === payload )}),
  [saveError]: (state, { payload }) => ({ ...state, error: payload }),
  [cleanError]: state => ({ ...state, error: null })
}, initialState)

export default registrationPage