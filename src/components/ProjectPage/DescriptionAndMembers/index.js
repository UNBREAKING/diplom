import { connect } from 'react-redux'
import { compose, withProps } from 'recompose' 
import DescriptionAndMembers from './DescriptionAndMembers'

const mapStateToProps = ({
  projectPage: {
    project: {
      jobsAndUsers = [],
      info: {
        description
      } = {}
    } = {}
  } = {}
}) => ({
  description,
  jobsAndUsers
})

export default compose(
  connect(mapStateToProps),
  withProps(({ jobsAndUsers }) =>({
    membersLabel: `Members: ${jobsAndUsers.filter(({userId})=> userId).length} / ${jobsAndUsers.length} active`,
    members: jobsAndUsers.filter(({userId}) => userId),
    freeJobs: jobsAndUsers.filter(({userId}) => !userId)
  }))
)(DescriptionAndMembers)