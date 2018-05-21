import { connect } from 'react-redux'
import { compose, withProps } from 'recompose' 
import LinksAndJobs from './LinksAndJobs'

const mapStateToProps = ({
  projectPage: {
    project: {
      jobsAndUsers = [],
      info: {
        git,
        facebook
      } = {}
    } = {}
  } = {}
}) => ({
  git,
  facebook,
  jobsAndUsers
})

export default compose(
  connect(mapStateToProps),
  withProps(({ jobsAndUsers }) =>({
    freeJobs: jobsAndUsers.filter(({userId}) => !userId)
  }))
)(LinksAndJobs)