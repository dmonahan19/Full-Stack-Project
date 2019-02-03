import { connect } from "react-redux";
import PinUserIndex from './pin_user_index';
import { fetchUserPins } from '../../actions/pin_actions';
import { openModal } from "../../actions/modal_actions"
import { withRouter } from 'react-router-dom'


const mapStateToProps = (state, ownProps) => {
 
    let currentUserId = state.session.id;
    return ({
        currentUserId: currentUserId,
        user: state.entities.users[ownProps.match.params.userId],
        pins: Object.values(state.entities.pins)
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchUserPins: (userId) => dispatch(fetchUserPins(userId)),
        openModal: (modal, pinId) => dispatch(openModal(modal, { pinId }))
    });
};

export default withRouter((connect(mapStateToProps, mapDispatchToProps)(PinUserIndex)));