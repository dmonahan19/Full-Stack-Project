import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

export default function boardEditReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return action.boardId;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}