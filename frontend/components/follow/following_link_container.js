
import { connect } from "react-redux";
import FollowingLink from './following_link';
import { withRouter } from 'react-router-dom';
import { fetchUsersPins } from '../../actions/pin_actions';
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => {
    return ({
        pins: Object.values(state.entities.pins),
        user: state.entities.users[state.session.id]
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchUsersPins: (userIds) => dispatch(fetchUsersPins(userIds)),
        openModal: (modal, pinId) => dispatch(openModal(modal, { pinId }))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FollowingLink));