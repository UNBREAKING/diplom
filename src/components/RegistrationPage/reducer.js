import { handleActions } from 'redux-actions'
import { 
  saveJobs, 
  saveSkills,
  selectSkill,
  selectJobTitle
 } from './actions'

const initialState = {
  jobs: [],
  skills: [],
  selectedSkill : {},
  selectedJobTitle : ""
}

const registrationPage = handleActions({
  [saveJobs]: (state, { payload }) => ({ ...state, jobs: payload }),
  [saveSkills]: (state, { payload }) => ({ ...state, skills: payload }),
  [selectSkill]: (state, { payload }) => 
    ({ ...state, selectedSkill: state.skills.find(({ _id }) => _id === payload )}),
  [selectJobTitle]: (state, { payload }) => ({ ...state, selectedJobTitle: payload })
}, initialState)

export default registrationPage