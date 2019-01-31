import { connect } from "react-redux";
import { createBoard } from "../../actions/board_actions"
import {openModal, closeModal } from "../../actions/modal_actions"
import BoardForm from '../boards/board_form'

const mapStateToProps = (state) => {
  let currentUserId = state.session.id;
 
  return({
    user: state.entities.users[currentUserId],
  });
};

  const mapDispatchToProps = (dispatch) => {
    return ({
        createBoard: (board)=> dispatch(createBoard(board)),
        closeModal: () => dispatch(closeModal()),
  
        // otherForm: (
        //   <button onClick={() => dispatch(openModal('boardform'))}>
        //     Create Board
        //   </button>
        // ),
    });
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(BoardForm);
