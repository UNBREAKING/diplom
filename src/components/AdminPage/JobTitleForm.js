import { reduxForm } from 'redux-form'
import { withState, withHandlers, compose } from 'recompose'
import { connect } from 'react-redux'
import { InputWithColorPicker } from './InputWithColorPicker'
import { saveJobTitle } from './actions'

export default compose(
  reduxForm({
    form: 'jobForm', 
  }),
  connect(null, { saveJobTitle }),
  withState('color', 'setColor', '#fff'),
  withHandlers({
    setColor: ({ setColor }) => ({ hex }) => setColor(() => hex),
    clickHandler: ({ color, saveJobTitle }) => () => saveJobTitle(color)
  }),
)(InputWithColorPicker)