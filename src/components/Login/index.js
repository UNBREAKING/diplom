import { connect } from 'react-redux'
import { openSignInModal } from './actions'
import Login from './Login'

export default connect(null, { openSignInModal })(Login)