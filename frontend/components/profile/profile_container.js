import { connect } from "react-redux";
import Profile from './profile'
import { openModal } from '../../actions/modal_actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
    let currentUserId = state.session.id;
    return({
      currentUserId: currentUserId,
      user: state.entities.users[ownProps.match.params.userId] 
    });
  };
  
  const mapDispatchToProps = (dispatch) => {
    return ({
      openModal: (modal)=> dispatch(openModal(modal))
    });
  };
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
