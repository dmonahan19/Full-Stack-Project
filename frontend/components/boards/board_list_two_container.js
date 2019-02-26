import { connect } from "react-redux";
import BoardListTwo from './board_list_two';
import { fetchBoards } from '../../actions/board_actions';


const mapStateToProps = (state) => {
    let currentUserId = state.session.id;

    return ({
        currentUserId: currentUserId,
        user: state.entities.users[currentUserId],
        boards: Object.values(state.entities.boards),

    });
};

const mapDispatchToProps = (dispatch) => {

    return ({
    
        fetchBoards: () => dispatch(fetchBoards())

    });
};

export default (connect(mapStateToProps, mapDispatchToProps)(BoardListTwo));