import { connect } from "react-redux";
import BoardIndexTwo from './board_index_two';
import { fetchBoards } from '../../actions/board_actions';
import { openModal } from '../../actions/modal_actions';
import {  createPin } from "../../actions/pin_actions";

const mapStateToProps = (state) => {
    let currentUserId = state.session.id;
    return ({
        currentUserId: currentUserId,
        boards: Object.values(state.entities.boards)
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchBoards: (userId) => dispatch(fetchBoards(userId)),
        deleteBoard: (id) => dispatch(deleteBoard(id)),
        createPin: (pin) => dispatch(createPin(pin)),
        openModal: (modal, boardId) => dispatch(openModal(modal, { boardId }))
    });
};

export default (connect(mapStateToProps, mapDispatchToProps)(BoardIndexTwo));