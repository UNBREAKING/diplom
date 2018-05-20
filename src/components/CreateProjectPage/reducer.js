import { handleActions } from 'redux-actions'
import { 
  saveJobs,
  saveTechnologies,
  saveTechnology,
  unsaveTechnology,
  saveJob,
  unsaveJob,
  cleanData
 } from './actions'

const initialState = {
  jobs: [],
  technologies: [],
  selectedTechnologies: [],
  savedJobs: []
}

const createProjectPage = handleActions({
  [saveJobs]: (state, { payload }) => ({ ...state, jobs: payload }),
  [saveTechnologies]: (state, { payload }) => ({ ...state, technologies: payload }),
  [saveTechnology]: (state, { payload }) => ({ ...state, selectedTechnologies: [...state.selectedTechnologies, payload] }),
  [unsaveTechnology]: (state, { payload }) => ({ ...state, selectedTechnologies: state.selectedTechnologies.filter(id=> id !==payload)}),
  [saveJob]: (state, { payload }) => ({ ...state, savedJobs: [...state.savedJobs, payload ]}),
  [unsaveJob]: (state, { payload }) => ({ ...state, savedJobs: state.savedJobs.filter((el, index)=> payload !== index )}),
  [cleanData]: state => initialState
}, initialState)

export default createProjectPage