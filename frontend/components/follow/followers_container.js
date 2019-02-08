import { connect } from "react-redux";
import Followers from './followers'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
    let currentUserId = state.session.id;
    return ({
        users: state.entities.users,
        currentUserId: currentUserId,
        user: state.entities.users[currentUserId],
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchUsersFollows: (userId) => dispatch(fetchUsersFollows(userId))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Followers));