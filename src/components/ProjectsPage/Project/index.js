import { connect } from 'react-redux'
import Project from './Project'
import { navigateToProjectPage } from '../actions'

export default connect(null, { navigateToProjectPage })(Project)