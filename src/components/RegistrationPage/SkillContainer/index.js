import { connect } from 'react-redux'
import SkillContainer from './SkillContainer'
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

export default connect(mapStateToProps,{ selectSkill })(SkillContainer)
 