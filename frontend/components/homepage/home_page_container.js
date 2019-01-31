import { connect } from "react-redux";
import HomePage from './home_page'
import { fetchUsersPins } from '../../actions/pin_actions';


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
        fetchUsersPins: () => dispatch(fetchUsersPins()),
      
    });
};

export default (connect(mapStateToProps, mapDispatchToProps)(HomePage));