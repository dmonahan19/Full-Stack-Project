import { connect } from "react-redux";
import { createBoard } from "../../actions/board_actions"
import {closeModal } from "../../actions/modal_actions"
import BoardForm from '../boards/board_form'

const mapStateToProps = (state) => {
  let currentUserId = state.session.id;
 
  return({
    user: state.entities.user[currentUserId],
    errors: state.errors.session,
  });
};

  const mapDispatchToProps = (dispatch) => {
    return ({
        createBoard: (board)=> dispatch(createBoard(board)),
        closeModal: () => dispatch(closeModal())
    });
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(BoardForm);
