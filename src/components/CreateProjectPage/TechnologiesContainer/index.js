import { connect } from 'react-redux'
import TechnologiesContainer from './TechnologiesContainer'
import { selectTechnology } from '../actions'

const mapStateToProps = ({
  createProjectPage: {
    technologies,
    selectedTechnologies
  }
}) => ({
  technologies,
  selectedTechnologies
})

export default connect(mapStateToProps,{ selectTechnology })(TechnologiesContainer)
 