import { connect } from 'react-redux'
import { closeResetPasswordModal, resetPassword } from '../actions'
import ResetPassword from './ResetPassword'

const mapStateToProps = ({
  login: {
    resetModalOpen
  }
}) => ({
  resetModalOpen
})


export default connect(mapStateToProps, { closeResetPasswordModal, resetPassword })(ResetPassword)
