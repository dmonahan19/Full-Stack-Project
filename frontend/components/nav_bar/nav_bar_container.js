import { connect } from "react-redux";
import { logout } from '../../actions/session_actions';
import { fetchSearchUsers } from '../../actions/user_actions'
import NavBar from './nav_bar'
import { withRouter } from 'react-router-dom'



const mapStateToProps = (state) => {
  let currentUserId = state.session.id;
  return({
    currentUserId: currentUserId,
    user: state.entities.users[currentUserId],
    users: Object.values(state.entities.users),
    searchUsers: Object.values(state.entities.searchUsers)
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout()),
    fetchSearchUsers: (searchQuery) => dispatch((fetchSearchUsers(searchQuery)))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));