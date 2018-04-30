import { reduxForm } from 'redux-form'
import JobTitleForm from './JobTitleForm'

export default reduxForm({
  form: 'jobTitleForm', 
})(JobTitleForm)

