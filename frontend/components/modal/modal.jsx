import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import BoardFormContainer from '../boards/board_form_container';
import EditBoardFormContainer from '../boards/board_edit_form_container';
import PinEditFormContainer from '../pins/pin_edit_form_container';
import CreatePinFormContainer from '../pins/create_pin_form_container'
import BoardListTwoContainer from '../boards/board_list_two_container'


function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'boardform':
      component = <BoardFormContainer />;
      break;
    case 'editboardform':
      component = <EditBoardFormContainer />;
      break;
    case 'pineditform':
      component = <PinEditFormContainer  />
      break;
    case 'pincreateform':
      component = <CreatePinFormContainer />
      break;
    case 'boardList':
      component = <BoardListTwoContainer />
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
    return {
      modal: state.ui.modal
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      closeModal: () => dispatch(closeModal())
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Modal);
