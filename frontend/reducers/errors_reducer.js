import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import pinErrorsReducer from './pin_errors_reducer';
import itemErrorsReducer from './item_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    pin: pinErrorsReducer,
    item: itemErrorsReducer
});

export default errorsReducer;