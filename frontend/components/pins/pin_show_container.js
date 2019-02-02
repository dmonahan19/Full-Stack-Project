import { connect } from "react-redux";
import PinShow from './pin_show';
import { fetchPin, deletePin, createPin } from '../../actions/pin_actions';
import { withRouter } from 'react-router-dom';
import { fetchBoards } from '../../actions/board_actions'
import { openModal, closeModal } from "../../actions/modal_actions"



const mapStateToProps = (state, ownProps) => {
    let currentUserId = state.session.id;
    const pin = state.entities.pins[ownProps.match.params.pinId] || {};

    return ({
        currentUserId: currentUserId,
        user: state.entities.users[ownProps.match.params.userId],
        pin: pin,
        boards: Object.values(state.entities.boards)

    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        deletePin: pinId => dispatch(deletePin(pinId)),
        fetchPin: id => dispatch(fetchPin(id)),
        fetchBoards: (userId) => dispatch(fetchBoards(userId)),
        createPin: (itemId) => dispatch(createPin(itemId)),
        openModal: (modal, pinId) => dispatch(openModal(modal, {pinId})),
    });

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinShow));