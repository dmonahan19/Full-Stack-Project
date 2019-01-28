import { connect } from "react-redux";
import Boards from './boards'
import {closeModal } from "../../actions/modal_actions"

const mapStateToProps = (state) => {
    let currentUserId = state.session.id;
    return({
      currentUserId: currentUserId,
      user: state.entities.users[currentUserId]
    });
  };
  
  const mapDispatchToProps = (dispatch) => {
    return ({
      closeModal: () => dispatch(closeModal()),
    });
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Boards);