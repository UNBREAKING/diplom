import { reduxForm } from 'redux-form'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { signin } from '../actions'

export default compose(
  reduxForm({
    form: 'login', 
  }),
  connect(null, { signin })
)(LoginForm)