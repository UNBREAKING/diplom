import AddProjectBlock from './AddProjectBlock'
import { connect } from 'react-redux'

const mapStateToProps = ({
  login: {
    user_token
  }
}) => ({
  user_token
})

export default connect(mapStateToProps)(AddProjectBlock)