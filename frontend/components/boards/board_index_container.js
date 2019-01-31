import { connect } from "react-redux";
import BoardIndex from './board_index';
import { fetchBoards } from '../../actions/board_actions';
import { openModal } from '../../actions/modal_actions';




const mapStateToProps = (state) => {

    return({
        boards: Object.values(state.entities.boards)
    });
  };
  
  const mapDispatchToProps = (dispatch) => {
    return ({
        fetchBoards: () => dispatch(fetchBoards()),
        deleteBoard: (id) => dispatch(deleteBoard(id)),
        openModal: (modal,boardId)=> dispatch(openModal(modal,{boardId}))
    });
  };
  
  export default (connect(mapStateToProps, mapDispatchToProps)(BoardIndex));