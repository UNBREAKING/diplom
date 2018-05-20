import { saveJob } from '../actions'
import { connect } from 'react-redux'
import { compose,withProps } from 'recompose'
import Select from './Select'

export default compose(
  connect(null, { saveJob }),
  withProps(({ input, saveJob })=>({
    input : { 
      ...input,
      onChange: (event) => {
        input.onChange(event)
        event.target.value && saveJob(event.target.value)
      }
    }
  }))
)(Select)
