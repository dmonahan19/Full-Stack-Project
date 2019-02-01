import { connect } from "react-redux";
import { logout } from '../../actions/session_actions';
import { fetchSearchUsers } from '../../actions/user_actions'
import NavBar from './nav_bar'
import { withRouter } from 'react-router-dom'



const mapStateToProps = (state) => {
  let currentUserId = state.session.id;
  return({
    currentUserId: currentUserId,
    user: state.entities.users[currentUserId]
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const history = ownProps.history
  return ({
    logout: () => dispatch(logout()),
    fetchSearchUsers: (searchQuery) => dispatch((fetchSearchUsers(searchQuery, history)))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));