import { connect } from "react-redux";
import FollowingBoard from './following_board';
import { withRouter } from 'react-router-dom';
import { fetchFollows, createFollow, deleteFollow } from '../../actions/follow_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchBoardPins } from '../../actions/pin_actions';
import { fetchBoard } from '../../actions/board_actions';

const mapStateToProps = (state, ownProps) => {
    let currentUserId = state.session.id;
    return ({
        follows: Object.values(state.entities.follows),
        currentUserId: currentUserId,
        user: state.entities.users[currentUserId],
        pins: Object.values(state.entities.pins),
        boards: Object.values(state.entities.boards) || {},
        follow: Object.values(state.entities.follows)
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchUsers: (userIds) => dispatch(fetchUsers(userIds)),
        fetchFollows: () => dispatch(fetchFollows()),
        createFollow: (follow) => dispatch(createFollow(follow)),
        deleteFollow: (followId) => dispatch(deleteFollow(followId)),
        fetchBoardPins: (boardIds) => dispatch(fetchBoardPins(boardIds)),
        fetchBoard: (boardId) => dispatch(fetchBoard(boardId))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FollowingBoard));