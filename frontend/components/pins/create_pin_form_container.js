import { connect } from "react-redux";
import { fetchPin, createPin } from "../../actions/pin_actions"
import { fetchBoards } from "../../actions/board_actions"
import { closeModal } from "../../actions/modal_actions"
import CreatePinForm from './create_pin_form'

const mapStateToProps = (state,ownProps) => {
    const pin = state.entities.pins[state.ui.pinEdit] || {}

    return ({
        pin: pin,
        boards: Object.values(state.entities.boards)

    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchPin: id => dispatch(fetchPin(id)),
        fetchBoards: () => dispatch(fetchBoards()),
        createPin: (itemId) => dispatch(createPin(itemId)),
        closeModal: () => dispatch(closeModal()),

    });
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePinForm);