import { reduxForm } from 'redux-form'
import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import RegistrationForm from './RegistrationForm'
import { selectJobTitle } from '../actions'

const mapStateToProps = ({
  registrationPage: {
    jobs,
    selectedJobTitle
  }
}) => ({
  jobs,
  selectedJobTitle
})

export default compose(
  reduxForm({
    form: 'registration', 
  }),
  connect(mapStateToProps,{ selectJobTitle }),
  withHandlers({
    selectJob: ({ selectJobTitle }) => event => selectJobTitle(event.target.value)
  })
)(RegistrationForm)