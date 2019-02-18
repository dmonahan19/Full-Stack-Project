import { connect } from "react-redux";
import {openModal } from "../../actions/modal_actions";
import CreateBoard from '../boards/create_board';
import { withRouter } from 'react-router-dom';

  const mapStateToProps = (state, ownProps) => {
    let currentUserId = state.session.id;
    return({
      currentUserId: currentUserId,
      user: state.entities.users[ownProps.match.params.userId], 
      boards: Object.values(state.entities.boards)
    });
  };


  const mapDispatchToProps = (dispatch) => {
    return ({
        openModal: (modal)=> dispatch(openModal(modal)),
    });
  };
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateBoard));
