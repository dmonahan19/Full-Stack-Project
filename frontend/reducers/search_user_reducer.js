import { RECEIVE_SEARCH_USERS } from '../actions/user_actions';
import { merge } from 'lodash';

const searchedUsersReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SEARCH_USERS:
            return merge({}, action.users);
        // case RECEIVE_NULL_USERS:
        //     return Object.keys(action.users);
        default:
            return state;
    }
};

export default searchedUsersReducer;