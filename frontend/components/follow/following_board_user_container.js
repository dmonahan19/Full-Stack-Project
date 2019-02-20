import { connect } from "react-redux";
import FollowingBoardUser from './following_board_user'
import { withRouter } from 'react-router-dom'


const mapStateToProps = (state, ownProps) => {
    let currentUserId = state.session.id;
    return ({
        currentUserId: currentUserId,
        user: state.entities.users[ownProps.match.params.userId],
        follows: Object.values(state.entities.follows)
    });
};


export default withRouter(connect(mapStateToProps, null)(FollowingBoardUser));