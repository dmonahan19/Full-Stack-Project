import { combineReducers } from 'redux';
import usersReducer from '../reducers/users_reducer';
import BoardsReducer from '../reducers/board_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    boards: BoardsReducer
});

export default entitiesReducer;