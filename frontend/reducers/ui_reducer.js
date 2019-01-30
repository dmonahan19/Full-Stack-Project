import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import boardEditReducer from './board_edit_reducer'
import pinEditReducer from './pin_edit_reducer'

const uiReducer = combineReducers({
  modal: modalReducer,
  boardEdit: boardEditReducer,
  pinEdit: pinEditReducer
});

export default uiReducer;