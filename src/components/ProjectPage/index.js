import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose' 
import ProjectPage from './ProjectPage'
import { getData } from './actions'

export default compose(
  connect(null, { getData }),
  lifecycle({
    componentDidMount(){
      const { 
        getData,
        match : {
          params: {
            id
          }
        }
       } = this.props

      getData(id)
    }
  })
)(ProjectPage)
