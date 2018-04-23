import { connect } from 'react-redux'
import { goToRegistration } from './helpers'
import LoginButtons from './LoginButtons'

export default connect(null,{ goToRegistration } )(LoginButtons) 