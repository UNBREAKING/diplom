import { reduxForm } from 'redux-form'
import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import RegistrationForm from './RegistrationForm'
import { register } from '../actions'

const mapStateToProps = ({
  registrationPage: {
    jobs
  }
}) => ({
  jobs
})

export default compose(
  reduxForm({
    form: 'registration', 
  }),
  connect(mapStateToProps, { register })
)(RegistrationForm)