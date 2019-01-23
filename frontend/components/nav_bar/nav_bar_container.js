import { connect } from "react-redux";
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar'



const mapStateToProps = (state) => {
  let currentUserId = state.session.id;
  return({
    currentUserId: currentUserId,
    user: state.entities.users[currentUserId]
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);