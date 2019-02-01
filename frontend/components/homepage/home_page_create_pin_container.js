import { connect } from "react-redux";
import { fetchPin, createPin } from "../../actions/pin_actions"
import { fetchBoards } from "../../actions/board_actions"
import { closeModal } from "../../actions/modal_actions"
import HomePageCreatePin from './home_page_create_pin'

const mapStateToProps = (state) => {
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
        createPin: (pin) => dispatch(createPin(pin)),
        closeModal: () => dispatch(closeModal()),

    });
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePageCreatePin);