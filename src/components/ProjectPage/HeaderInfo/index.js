import { connect } from 'react-redux'
import HeaderInfo from './HeaderInfo'

const mapStateToProps = ({
  projectPage: {
    project: {
      info: {
        name,
        tags,
        status
      } = {}
    } = {}
  } = {}
}) => ({
  name,
  tags,
  status
})

export default connect(mapStateToProps)(HeaderInfo)
