import { RECEIVE_CURRENT_USER} from '../actions/session_actions';
import { RECEIVE_SEARCH_USERS, RECEIVE_ALL_USERS } from '../actions/user_actions'
import { REMOVE_BOARD } from '../actions/board_actions'
import { merge } from 'lodash';


const usersReducer = (state={},action) => {
    let newState;
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_USERS:
            return merge({}, state, action.users);
        case RECEIVE_CURRENT_USER:
            return merge({}, state, {[action.currentUser.id]: action.currentUser});
        case REMOVE_BOARD:
            newState = merge({}, state);
            newState[action.userId].board_ids = newState[action.userId].board_ids.filter(id => id != action.boardId);
            return newState;
        case RECEIVE_SEARCH_USERS:
            return merge({}, state, action.users);
        default:
            return state;
    }

};

export default usersReducer;