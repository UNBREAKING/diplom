import { reduxForm } from 'redux-form'
import { withState, withHandlers, compose } from 'recompose'
import { InputWithColorPicker} from './InputWithColorPicker'

export default compose(
  reduxForm({
    form: 'skillForm', 
  }),
  withState('color', 'setColor', '#fff'),
  withHandlers({
    setColor: ({ setColor }) => ({ hex }) => setColor(() => hex)
  }),
)(InputWithColorPicker)