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

