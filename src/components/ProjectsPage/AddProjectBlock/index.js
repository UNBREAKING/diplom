import AddProjectBlock from './AddProjectBlock'
import { connect } from 'react-redux'
import { navigateToCreateProjectPage } from '../actions'

const mapStateToProps = ({
  login: {
    user_token
  }
}) => ({
  user_token
})

export default connect(mapStateToProps, { navigateToCreateProjectPage })(AddProjectBlock)