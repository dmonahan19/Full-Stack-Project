import { connect } from "react-redux";
import { updateBoard, deleteBoard, fetchBoard } from "../../actions/board_actions"
import { closeModal } from "../../actions/modal_actions"
import EditBoardForm from '../boards/board_edit_form'


const mapStateToProps = (state, ownProps) => {

  const defaultBoard = { title: '', description: '' };
  const board = state.entities.boards[state.ui.boardEdit] || defaultBoard
  return({
    board: board
  });
};

  const mapDispatchToProps = (dispatch) => {
    return ({
        fetchBoard: (id) => dispatch(fetchBoard(id)),
        updateBoard: (board)=> dispatch(updateBoard(board)),
        deleteBoard: (id) => dispatch(deleteBoard(id)),
        closeModal: () => dispatch(closeModal()),

    });
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditBoardForm);