import { connect } from 'react-redux'
import { compose } from 'recompose' 
import LinksAndJobs from './LinksAndJobs'
import { sendOffer, showOffer } from '../actions'

const mapStateToProps = ({
  login: {
    user_token
  },
  projectPage: {
    project: {
      jobsAndUsers = [],
      offers = [],
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
  offers,
  owner,
  user_token
})

export default compose(
  connect(mapStateToProps, { sendOffer, showOffer })
)(LinksAndJobs)