import { connect } from "react-redux";
import Followers from './followers'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
    let currentUserId = state.session.id;
    return ({
        users: state.entities.users,
        currentUserId: currentUserId,
        user: state.entities.users[ownProps.match.params.userId],
    });
};

// const mapDispatchToProps = (dispatch) => {
//     return ({

//     });
// };

export default withRouter(connect(mapStateToProps, null)(Followers));