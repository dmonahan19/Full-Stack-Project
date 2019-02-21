import { RECEIVE_CURRENT_USER} from '../actions/session_actions';
import { RECEIVE_SEARCH_USERS, RECEIVE_ALL_USERS } from '../actions/user_actions'
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';
import { REMOVE_BOARD } from '../actions/board_actions'
import { merge } from 'lodash';


const usersReducer = (state = {}, action) => {
    let newState;
    let user;
    let user1;
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_USERS:
            return merge({}, state, action.users);
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { [action.currentUser.id]: action.currentUser });
        case REMOVE_BOARD:
            newState = merge({}, state);
            newState[action.userId].board_ids = newState[action.userId].board_ids.filter(id => id != action.boardId);
            return newState;
        case RECEIVE_FOLLOW:
            newState = merge({}, state);
            if (action.follow.following_type === 'User') {
                user = newState[action.follow.following_id];
                user.follower_userIds.push(action.follow.user_id);
                user.follow_ids.push(action.follow.id);
                user1 = newState[action.follow.user_id];
                user1.following_userIds.push(action.follow.following_id);
            }
            if (action.follow.following_type === 'Board') {
                user = newState[action.follow.user_id];
                user.following_boardIds.push(action.follow.following_id);
                user.follow_ids_board.push(action.follow.id);
            }
            return newState;
        case REMOVE_FOLLOW:
            newState = merge({}, state);
            if (action.follow.following_type === 'User') {
                newState[action.userId].follow_ids = newState[action.userId].follow_ids.filter(id => id != action.followId);
                newState[action.userId].follower_userIds = newState[action.userId].follower_userIds.filter(id => id != action.follow.user_id);
                newState[action.follow.user_id].following_userIds = newState[action.follow.user_id].following_userIds.filter(id => id != action.follow.following_id);
            }
            if (action.follow.following_type === 'Board') {
                newState[action.follow.user_id].following_boardIds = newState[action.follow.user_id].following_boardIds.filter(id => id != action.follow.following_id);
            }
            return newState;
        case RECEIVE_SEARCH_USERS:
            return merge({}, state, action.users);
        default:
            return state;
    }

};


export default usersReducer;