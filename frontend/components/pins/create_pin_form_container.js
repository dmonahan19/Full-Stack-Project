import { connect } from "react-redux";
import { createPin } from "../../actions/pin_actions"
import { fetchBoards } from "../../actions/board_actions"

import CreatePinForm from './create_pin_form'

const mapStateToProps = (state) => {
    let currentUserId = state.session.id;
    return ({
        boards: Object.values(state.entities.boards),
        user: state.entities.users[currentUserId]
    });
};


const mapDispatchToProps = (dispatch) => {
    return ({
        createPin: (pin) => dispatch(createPin(pin)),
        fetchBoards: () => dispatch(fetchBoards()),

    });
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePinForm);