import { connect } from "react-redux";
import { updatePin, deletePin, fetchPin } from "../../actions/pin_actions";
import { closeModal } from "../../actions/modal_actions";
import PinEditForm from './pin_edit_form';


const mapStateToProps = (state, ownProps) => {
   
    const defaultPin= { title: '', description: '' };
    const pin = state.entities.pins[state.ui.pinEdit] || defaultPin;
    return ({
        pin: pin
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchPin: (id) => dispatch(fetchPin(id)),
        updatePin: (pin) => dispatch(updatePin(pin)),
        deletePin: (pinId) => dispatch(deletePin(pinId)),
        closeModal: () => dispatch(closeModal()),

    });
};

export default connect(mapStateToProps, mapDispatchToProps)(PinEditForm);