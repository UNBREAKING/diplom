import { compose } from 'recompose'
import { connect } from 'react-redux'
import UsersList from './UsersList'

const mapStateToProps = ({
  usersPage: {
    users
  }
}) => ({
  users
})

export default compose(
  connect(mapStateToProps)
)(UsersList)
