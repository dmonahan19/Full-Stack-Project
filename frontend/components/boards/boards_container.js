import { connect } from "react-redux";
import Boards from './boards';
import {closeModal } from "../../actions/modal_actions";
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    let currentUserId = state.session.id;
    return({
      currentUserId: currentUserId,
      user: state.entities.users[ownProps.match.params.userId],
    });
  };
  
  const mapDispatchToProps = (dispatch) => {
    return ({
      closeModal: () => dispatch(closeModal()),
    });
  };
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Boards));