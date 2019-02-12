import { connect } from "react-redux";
import Following from './following'
import { withRouter } from 'react-router-dom'
import { fetchFollows } from '../../actions/follow_actions'

const mapStateToProps = (state, ownProps) => {
    let currentUserId = state.session.id;
    return ({
        follows: Object.values(state.entities.follows),
        currentUserId: currentUserId,
        user: state.entities.users[currentUserId],
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchFollows: () => dispatch(fetchFollows()),
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Following));