import { connect } from 'react-redux'
import { openSignInModal } from './actions'
import Login from './Login'

const mapStateToProps = ({
    loginModal: {
        visibleModal
    }
}) => ({
    visibleModal
})

export default connect(mapStateToProps, { openSignInModal })(Login)