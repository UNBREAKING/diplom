import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { compose,withProps } from 'recompose'
import CreateProjectForm from './CreateProjectForm'

const mapStateToProps = ({
  createProjectPage: {
    jobs
  }
}) => ({
  jobs
})

export default compose(
  reduxForm({
    form: 'createProject'
  }),
  connect(mapStateToProps)
)(CreateProjectForm)