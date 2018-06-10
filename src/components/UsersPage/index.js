import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose' 
import UsersPage from './UsersPage'
import { getData } from './actions'

export default compose(
  connect(null, { getData }),
  lifecycle({
    componentDidMount(){
      const { 
        getData
       } = this.props

      getData()
    }
  })
)(UsersPage)
