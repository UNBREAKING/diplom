import { push } from 'react-router-redux'

export const navigateToCreateProjectPage = () => (dispatch) => dispatch(push('/create-project'))
