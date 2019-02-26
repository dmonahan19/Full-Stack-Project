import { connect } from "react-redux";
import HomePage from './home_page';
import { fetchUsersPins } from '../../actions/pin_actions';
import { fetchBoards } from '../../actions/board_actions';
import { openModal } from "../../actions/modal_actions";


const mapStateToProps = (state) => {
    let currentUserId = state.session.id;

    return ({
        currentUserId: currentUserId,
        user: state.entities.users[currentUserId],
        pins: Object.values(state.entities.pins), 
        boards: Object.values(state.entities.boards),
       
   
    });
};

const mapDispatchToProps = (dispatch) => {
 
    return ({
        fetchUsersPins: () => dispatch(fetchUsersPins()),
        fetchBoards: (userId) => dispatch(fetchBoards(userId)),
        openModal: (modal, pinId) => dispatch(openModal(modal, { pinId }))
    });
};

export default (connect(mapStateToProps, mapDispatchToProps)(HomePage));