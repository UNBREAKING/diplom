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
