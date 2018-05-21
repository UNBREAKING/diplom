import { connect } from 'react-redux'
import ProjectsList from './ProjectsList'

const mapStateToProps = ({
  projectsPage: {
    projects
  }
}) => ({
  projects
})

export default connect(mapStateToProps)(ProjectsList)