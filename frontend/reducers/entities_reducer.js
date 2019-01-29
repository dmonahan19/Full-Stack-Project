import { combineReducers } from 'redux';
import usersReducer from '../reducers/users_reducer';
import BoardsReducer from '../reducers/board_reducer'
import ItemsReducer from './item_reducer';
import PinsReducer from './pin_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    boards: BoardsReducer,
    pins: PinsReducer
});

export default entitiesReducer;