import AdminPage from './AdminPage'
import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { getAdminPageData } from './actions'

export default compose(
  connect(null, { getAdminPageData }),
  lifecycle({
    componentDidMount() {
      const { getAdminPageData } = this.props
      getAdminPageData()
    }
  })
)(AdminPage)
