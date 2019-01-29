import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import boardEditReducer from './board_edit_reducer'

const uiReducer = combineReducers({
  modal: modalReducer,
  boardEdit: boardEditReducer
});

export default uiReducer;