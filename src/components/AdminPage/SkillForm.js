import { reduxForm } from 'redux-form'
import { withState, withHandlers, compose } from 'recompose'
import { connect } from 'react-redux'
import { InputWithColorPicker} from './InputWithColorPicker'
import { saveCoreSkill } from './actions'

export default compose(
  reduxForm({
    form: 'skillForm', 
  }),
  connect(null, { saveCoreSkill }),
  withState('color', 'setColor', '#000000'),
  withHandlers({
    setColor: ({ setColor }) => ({ hex }) => setColor(() => hex),
    clickHandler: ({ color, saveCoreSkill }) => () => saveCoreSkill(color)
  }),
)(InputWithColorPicker)