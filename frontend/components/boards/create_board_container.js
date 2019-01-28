import { connect } from "react-redux";
import {openModal } from "../../actions/modal_actions"
import CreateBoard from '../boards/create_board'

  const mapStateToProps = (state) => {
    
    return({
     boards: Object.values(state.entities.boards)
    });
  };


  const mapDispatchToProps = (dispatch) => {
    return ({
        openModal: (modal)=> dispatch(openModal(modal)),
    });
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(CreateBoard);
