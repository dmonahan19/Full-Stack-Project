import { connect } from "react-redux";
import Profile from './profile'
import { openModal } from '../../actions/modal_actions'

const mapStateToProps = (state) => {
    let currentUserId = state.session.id;
    return({
      currentUserId: currentUserId,
      user: state.entities.users[currentUserId] || defaultUser
    });
  };
  
  const mapDispatchToProps = (dispatch) => {
    return ({
      openModal: (modal)=> dispatch(openModal(modal))
    });
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Profile);
