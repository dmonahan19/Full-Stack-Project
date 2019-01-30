import { connect } from "react-redux";
import PinUserIndex from './pin_user_index';
import { fetchUserPins } from '../../actions/pin_actions';


const mapStateToProps = (state) => {
 
    let currentUserId = state.session.id;
    return ({
        currentUserId: currentUserId,
        user: state.entities.users[currentUserId],
        pins: Object.values(state.entities.pins)
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchUserPins: (userId) => dispatch(fetchUserPins(userId))
    });
};

export default (connect(mapStateToProps, mapDispatchToProps)(PinUserIndex));