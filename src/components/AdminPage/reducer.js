import { handleActions } from 'redux-actions'
import { 
  saveJobs, 
  saveSkills, 
  saveTechnologies, 
  addTechnology,
  addSkill,
  addJobTitle,
  removeJobTitle,
  removeSkill,
  removeTechnology
 } from './actions'

const initialState = {
  jobs: [],
  skills: [],
  technologies: []
}

const adminPage = handleActions({
  [saveJobs]: (state, { payload }) => ({ ...state, jobs: payload }),
  [saveSkills]: (state, { payload }) => ({ ...state, skills: payload }),
  [saveTechnologies]: (state, { payload }) => ({ ...state, technologies: payload }),
  [addTechnology]: (state, { payload }) => ({ ...state, technologies: [ ...state.technologies , payload] }),
  [addSkill]: (state, { payload }) => ({ ...state, skills: [ ...state.skills , payload] }),
  [addJobTitle]: (state, { payload }) => ({ ...state, jobs: [ ...state.jobs , payload] }),
  [removeJobTitle]: (state, { payload }) => ({ ...state, jobs: state.jobs.filter(({ _id }) => _id !== payload ) }),
  [removeSkill]: (state, { payload }) => ({ ...state, skills: state.skills.filter(({ _id }) => _id !== payload ) }),
  [removeTechnology]: (state, { payload }) => ({ ...state, technologies: state.technologies.filter(({ _id }) => _id !== payload ) })
}, initialState)

export default adminPage