import { createAction } from 'redux-actions'
import fetch from '../../services/fetch'

export const saveJobTitle = color => ( dispatch, getState ) => {
  const { 
    form : { 
      jobForm: { 
        values: { 
          jobTitle 
        } = {}
      } 
    }  
  } = getState()

  jobTitle ?
    fetch({ 
      url: 'http://localhost:3000/api/addJobTitle' , 
      method: 'POST', 
      body: JSON.stringify({ color, name: jobTitle }) 
    })
    .then(() => console.log('success'))
    .catch((err) => console.log(err)) :
    alert('Field Job Title is empty')
}

export const saveCoreSkill = color => ( dispatch, getState ) => {
  const { 
    form : { 
      skillForm: { 
        values: { 
          coreSkill 
        } = {}
      } 
    }  
  } = getState()

  coreSkill ?
    fetch({ 
      url: 'http://localhost:3000/api/addCoreSkill' , 
      method: 'POST', 
      body: JSON.stringify({ color, name: coreSkill }) 
    })
    .then(() => console.log('success'))
    .catch((err) => console.log(err)) :
    alert('Field Job Title is empty')
}

export const saveTechnology = color => ( dispatch, getState ) => {
  const { 
    form : { 
      technologyForm: { 
        values: { 
          technology 
        } = {}
      } 
    }  
  } = getState()

  technology ?
    fetch({ 
      url: 'http://localhost:3000/api/addTechnology' , 
      method: 'POST', 
      body: JSON.stringify({ color, name: technology }) 
    })
    .then(() => console.log('success'))
    .catch((err) => console.log(err)) :
    alert('Field Job Title is empty')
}

export const saveJobs = createAction("ADMIN_PAGE/SAVE_JOB_TITLES")
export const saveSkills = createAction("ADMIN_PAGE/SAVE_CORE_SKILLS")
export const saveTechnologies = createAction("ADMIN_PAGE/SAVE_TECHNOLOGIES")

export const getAdminPageData = () => dispatch =>
  fetch({ 
    url: 'http://localhost:3000/api/getAdminPage' , 
    method: 'GET'
  })
  .then(data => data.json())
  .then(({ jobs, skills , technologies }) => {
    dispatch(saveJobs(jobs))
    dispatch(saveSkills(skills))
    dispatch(saveTechnologies(technologies))
  })
  .catch((err) => console.log(err))