import { connect } from "react-redux";
import PinShow from './pin_show';
import { fetchPin, deletePin } from '../../actions/pin_actions';
import { withRouter } from 'react-router-dom';



const mapStateToProps = (state, ownProps) => {
    debugger

    const pin = state.entities.pins[ownProps.match.params.pinId] || {};

    return ({
        pin: pin

    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        deletePin: pinId => dispatch(deletePin(pinId)),
        fetchPin: id => dispatch(fetchPin(id)),
    });

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinShow));