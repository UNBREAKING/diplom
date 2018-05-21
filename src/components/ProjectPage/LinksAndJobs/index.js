import { connect } from 'react-redux'
import { compose, withProps } from 'recompose' 
import LinksAndJobs from './LinksAndJobs'
import { sendOffer } from '../actions'

const mapStateToProps = ({
  login: {
    user_token
  },
  projectPage: {
    project: {
      jobsAndUsers = [],
      info: {
        git,
        facebook,
        owner
      } = {}
    } = {}
  } = {}
}) => ({
  git,
  facebook,
  jobsAndUsers,
  owner,
  user_token
})

export default compose(
  connect(mapStateToProps, { sendOffer }),
  withProps(({ jobsAndUsers }) =>({
    freeJobs: jobsAndUsers.filter(({userId}) => !userId)
  }))
)(LinksAndJobs)