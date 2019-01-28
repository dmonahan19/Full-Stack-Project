import { connect } from "react-redux";
import {openModal } from "../../actions/modal_actions"
import CreateBoard from '../boards/create_board'


  const mapDispatchToProps = (dispatch) => {
    return ({
       
        openModal: (modal)=> dispatch(openModal(modal))
    });
  };
  
  export default connect(null, mapDispatchToProps)(CreateBoard);
