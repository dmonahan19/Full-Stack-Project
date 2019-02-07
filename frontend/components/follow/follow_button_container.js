// import { connect } from "react-redux";
// import FollowButton from './follow_button';
// import { withRouter } from 'react-router-dom'
// import { createFollow, deleteFollow } from '../../actions/follow_actions'




// const mapStateToProps = (state, ownProps) => {
//     let currentUserId = state.session.id;
//     return ({
//         currentUserId: currentUserId,
//         follows: this.state.follows
//     });
// };

// const mapDispatchToProps = (dispatch) => {
//     return ({
//         createFollow: (follow) => dispatch(createFollow(follow)),
//         deleteFollow: (followId) => dispatch(deleteFollow(followId))
//     });
// };

// export default withRouter((connect(mapStateToProps, mapDispatchToProps)(FollowButton)));