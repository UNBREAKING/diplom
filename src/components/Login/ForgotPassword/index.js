import { connect } from 'react-redux'
import { closeForgotPasswordModal, checkLogin } from '../actions'
import ForgotPassword from './ForgotPassword'

const mapStateToProps = ({
  login: {
    isForgotPassword
  }
}) => ({
  isForgotPassword
})


export default connect(mapStateToProps, { closeForgotPasswordModal, checkLogin })(ForgotPassword)
