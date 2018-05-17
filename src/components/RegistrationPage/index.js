import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import RegistrationPage from './RegistrationPage' 
import { getRegistrationPageData } from './actions'

export default compose(
  connect(null, { getRegistrationPageData }),
  lifecycle({
    componentDidMount() {
      const { getRegistrationPageData } = this.props
      getRegistrationPageData()
    }
  })
)(RegistrationPage)
