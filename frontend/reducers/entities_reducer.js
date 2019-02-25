import { combineReducers } from 'redux';
import usersReducer from '../reducers/users_reducer';
import BoardsReducer from '../reducers/board_reducer';
import PinsReducer from './pin_reducer';
import FollowsReducer from './follow_reducer';
import SearchUserReducer from './search_user_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    boards: BoardsReducer,
    pins: PinsReducer,
    follows: FollowsReducer,
    searchUsers: SearchUserReducer
});

export default entitiesReducer;