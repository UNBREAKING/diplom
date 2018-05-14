import { handleActions } from 'redux-actions'
import { saveJobs, saveSkills, saveTechnologies } from './actions'

const initialState = {}

const adminPage = handleActions({
  [saveJobs]: (state, { payload }) => ({ ...state, jobs: payload }),
  [saveSkills]: (state, { payload }) => ({ ...state, skills: payload }),
  [saveTechnologies]: (state, { payload }) => ({ ...state, technologies: payload })
}, initialState)

export default adminPage