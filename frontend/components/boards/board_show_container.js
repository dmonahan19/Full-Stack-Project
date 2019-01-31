import { connect } from "react-redux";
import BoardShow from './board_show';
import { deleteBoard, fetchBoard } from '../../actions/board_actions';
import { fetchPins } from '../../actions/pin_actions';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  
    const board = state.entities.boards[ownProps.match.params.boardId] || {};
    let currentUserId = state.session.id;
    return({
        boards: state.entities.boards,
        board: board,
        pins: Object.values(state.entities.pins),
        user: state.entities.users[currentUserId]
      
    });
  };
  
  const mapDispatchToProps = (dispatch) => {
    return ({
        deleteBoard: id => dispatch(deleteBoard(id)),
        fetchBoard: id => dispatch(fetchBoard(id)),
        fetchPins: boardId => dispatch(fetchPins(boardId)),
        openModal: (modal, boardId) => dispatch(openModal(modal, boardId)),
        openModal: (modal, pinId) => dispatch(openModal(modal, pinId)),
    });
  };
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardShow));