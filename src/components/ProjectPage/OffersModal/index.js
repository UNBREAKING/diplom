import { connect } from 'react-redux'
import { compose , withProps, withHandlers } from  'recompose'
import { hideOffer, selectUser, cleanUser, chooseUserForJob } from '../actions'
import OffersModal from './OffersModal'

const mapStateToProps = ({
  projectPage: {
    selectedOffer,
    project: {
      offers,
      jobsAndUsers
    },
    selectedUserForOffer
  }
}) => ({
  selectedOffer,
  jobsAndUsers,
  offers,
  selectedUserForOffer
})


export default compose(
  connect(mapStateToProps, { hideOffer, selectUser, cleanUser, chooseUserForJob }),
  withProps(({
    selectedOffer,
    jobsAndUsers,
    offers
  }) => ({
    nameOfSelectedJob: Number.isInteger(selectedOffer) && jobsAndUsers[selectedOffer].jobId.name,
    numberOfOffers: Number.isInteger(selectedOffer) && offers[selectedOffer].length,
    offers: Number.isInteger(selectedOffer) && offers[selectedOffer]
  })
  ),
  withHandlers({
    close: ({ hideOffer, cleanUser }) => () => {
      hideOffer()
      cleanUser()
    }
  })
)(OffersModal)
