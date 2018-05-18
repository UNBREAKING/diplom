import { compose, lifecycle} from 'recompose'
import { connect } from 'react-redux'
import { 
  openSignInModal, 
  closeSignInModal, 
  setUserToken,
  signout 
} from './actions'
import Login from './Login'

const mapStateToProps = ({
  login: {
    visibleModal,
    user_token
  }
}) => ({
  visibleModal,
  user_token
})

const dispatchToProps = { openSignInModal, closeSignInModal, setUserToken, signout }

export default compose(
  connect(mapStateToProps, dispatchToProps),
  lifecycle({
    componentDidMount(){
      const { setUserToken } = this.props

      setUserToken()
    }
  })
)(Login)