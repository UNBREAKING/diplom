import { reduxForm } from 'redux-form'
import { withState, withHandlers, compose } from 'recompose'
import { connect } from 'react-redux'
import { InputWithColorPicker} from './InputWithColorPicker'
import { saveTechnology } from './actions'

export default compose(
  reduxForm({
    form: 'technologyForm' 
  }),
  connect(null, { saveTechnology }),
  withState('color', 'setColor', '#fff'),
  withHandlers({
    setColor: ({ setColor }) => ({ hex }) => setColor(() => hex),
    clickHandler: ({ color, saveTechnology }) => () => saveTechnology(color)
  }),
)(InputWithColorPicker)