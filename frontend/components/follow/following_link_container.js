
import { connect } from "react-redux";
import FollowingLink from './following_link';
import { withRouter } from 'react-router-dom';
import { fetchUserPins } from '../../actions/pin_actions';
import { fetchUsersPins } from '../../actions/pin_actions';
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
    let currentUserId = state.session.id;
    return ({
        pins: Object.values(state.entities.pins),
        user: state.entities.users[currentUserId]
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchUsersPins: (userIds) => dispatch(fetchUsersPins(userIds)),
        openModal: (modal, pinId) => dispatch(openModal(modal, { pinId }))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FollowingLink));