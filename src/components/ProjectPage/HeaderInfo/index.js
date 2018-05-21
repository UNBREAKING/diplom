import { connect } from 'react-redux'
import HeaderInfo from './HeaderInfo'
import { startProject, closeProject, pauseProject } from '../actions'

const mapStateToProps = ({
  login: {
    user_token
  },
  projectPage: {
    project: {
      info: {
        name,
        tags,
        status,
        owner
      } = {}
    } = {}
  } = {}
}) => ({
  name,
  tags,
  status,
  owner,
  user_token
})

export default connect(mapStateToProps,{ startProject, closeProject, pauseProject })(HeaderInfo)
