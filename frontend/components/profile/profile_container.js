import { connect } from "react-redux";
import Profile from './profile'
import { openModal } from '../../actions/modal_actions'
import { withRouter } from 'react-router-dom'
import { createFollow, deleteFollow } from '../../actions/follow_actions'

const mapStateToProps = (state, ownProps) => {
    let currentUserId = state.session.id;
    return({
      currentUserId: currentUserId,
      user: state.entities.users[ownProps.match.params.userId],
      follows: Object.values(state.entities.follows)
    });
  };
  
  const mapDispatchToProps = (dispatch) => {
    return ({
      openModal: (modal)=> dispatch(openModal(modal)),
      createFollow:  (follow) => dispatch(createFollow(follow)),
       deleteFollow: (followId) => dispatch(deleteFollow(followId))
    });
  };
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
