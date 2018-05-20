import { connect } from 'react-redux'
import { compose, withProps } from 'recompose'
import JobsContainer from './JobsContainer'
import { unsaveJob } from '../actions'

const mapStateToProps = ({
  createProjectPage: {
    savedJobs, 
    jobs
  }
}) => ({
  savedJobs,
  jobs
})

export default compose(
  connect(mapStateToProps, { unsaveJob }),
  withProps(({ savedJobs, jobs }) => ({
    jobs: savedJobs.map(id => jobs.find(({ _id }) => _id === id ))
  }))
)(JobsContainer)