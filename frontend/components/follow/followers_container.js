import { connect } from "react-redux";
import Follow from './followers';
import { withRouter } from 'react-router-dom';
import { fetchFollows, createFollow, deleteFollow } from '../../actions/follow_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
    let currentUserId = state.session.id;
    return ({
        users: Object.values(state.entities.users),
        follows: Object.values(state.entities.follows),
        currentUserId: currentUserId,
        user: state.entities.users[ownProps.match.params.userId]
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchFollows: () => dispatch(fetchFollows()),
        createFollow: (follow) => dispatch(createFollow(follow)),
        deleteFollow: (followId) => dispatch(deleteFollow(followId)),
        fetchUsers: (userIds) => dispatch(fetchUsers(userIds))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Follow));