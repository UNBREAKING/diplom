import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose' 
import CreateProjectPage from './CreateProjectPage'
import { getCreateProjectPageData } from './actions'

export default compose(
  connect(null,{ getCreateProjectPageData }),
  lifecycle({
    componentDidMount(){
      const { getCreateProjectPageData } = this.props

      getCreateProjectPageData()
    }
  })
)(CreateProjectPage)
