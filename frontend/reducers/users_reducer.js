import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { REMOVE_BOARD } from '../actions/board_actions'
import { merge } from 'lodash';

const usersReducer = (state={},action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, {[action.currentUser.id]: action.currentUser});
        case REMOVE_BOARD:
            let newState = merge({}, state)
            newState[action.userId].board_ids = newState[action.userId].board_ids.filter(id => id != action.boardId);
            return newState
        default:
            return state;
    }

};

export default usersReducer;