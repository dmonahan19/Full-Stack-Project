import { connect } from "react-redux";
import BoardIndex from './board_index';
import { fetchBoards } from '../../actions/board_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom'




const mapStateToProps = (state, ownProps) => {
    let currentUserId = state.session.id;
    return({
        currentUserId: currentUserId,
        boards: Object.values(state.entities.boards),
        user: state.entities.users[ownProps.match.params.userId] 
    });
  };
  
  const mapDispatchToProps = (dispatch) => {
    return ({
        fetchBoards: (userId) => dispatch(fetchBoards(userId)),
        deleteBoard: (id) => dispatch(deleteBoard(id)),
        openModal: (modal,boardId)=> dispatch(openModal(modal,{boardId}))
    });
  };
  
  export default withRouter((connect(mapStateToProps, mapDispatchToProps)(BoardIndex)));