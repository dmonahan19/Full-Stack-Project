import { connect } from "react-redux";
import { updateBoard, deleteBoard } from "../../actions/board_actions"
import { closeModal } from "../../actions/modal_actions"
import EditBoardForm from '../boards/board_edit_form'

const mapStateToProps = (state) => {
  return({
    boards: Object.values(state.entities.boards)
  });
};

  const mapDispatchToProps = (dispatch) => {
    return ({
        updateBoard: (board)=> dispatch(updateBoard(board)),
        deleteBoard: (id) => dispatch(deleteBoard(id)),
        closeModal: () => dispatch(closeModal()),

    });
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditBoardForm);