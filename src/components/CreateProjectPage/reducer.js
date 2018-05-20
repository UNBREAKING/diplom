import { handleActions } from 'redux-actions'
import { 
  saveJobs,
  saveTechnologies,
  saveTechnology,
  unsaveTechnology
 } from './actions'

const initialState = {
  jobs: [],
  technologies: [],
  selectedTechnologies: []
}

const createProjectPage = handleActions({
  [saveJobs]: (state, { payload }) => ({ ...state, jobs: payload }),
  [saveTechnologies]: (state, { payload }) => ({ ...state, technologies: payload }),
  [saveTechnology]: (state, { payload }) => ({ ...state, selectedTechnologies: [...state.selectedTechnologies, payload] }),
  [unsaveTechnology]: (state, { payload }) => ({ ...state, selectedTechnologies: state.selectedTechnologies.filter(id=> id !==payload)}),
}, initialState)

export default createProjectPage