import CreateProjectForm from './CreateProjectForm'
import { reduxForm } from 'redux-form'

export default reduxForm({
  form: 'creatProject'
})(CreateProjectForm)