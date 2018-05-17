import AdminPage from './AdminPage'
import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { 
  getAdminPageData , 
  deleteJobTitle,
  deleteSkill,
  deleteTechnology 
} from './actions'

const mapStateToProps = ({
  adminPage: {
    jobs,
    skills,
    technologies
  } = {}
}) => ({
  jobs,
  skills,
  technologies
})

const dispatchToProps = {
  getAdminPageData , 
  deleteJobTitle,
  deleteSkill,
  deleteTechnology 
}

export default compose(
  connect(mapStateToProps, dispatchToProps),
  lifecycle({
    componentDidMount() {
      const { getAdminPageData } = this.props
      getAdminPageData()
    }
  })
)(AdminPage)
