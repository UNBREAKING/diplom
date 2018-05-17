import { connect } from 'react-redux'
import JobTitleContainer from './JobTitleContainer'
import { selectSkill } from '../actions'

const mapStateToProps = ({
  registrationPage: {
    skills,
    selectedSkill: {
      _id: selectedId
    } = {}
  }
}) => ({
  skills,
  selectedId
})

export default connect(mapStateToProps,{ selectSkill })(JobTitleContainer)
 