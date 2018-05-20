import { push } from 'react-router-redux'
import fetch from '../../services/fetch'

export const navigateToCreateProjectPage = () => dispatch => dispatch(push('/create-project'))

export const getData = () => dispatch =>
  fetch({ 
    url: 'http://localhost:3000/getProjects', 
    method: 'GET'
  })
  .then((data) => {
    console.log(data)
    //dispatch(saveJobs(jobs))
    //dispatch(saveTechnologies(technologies))
  })
  .catch((err) => console.log(err))