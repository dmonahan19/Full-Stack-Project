import { RECEIVE_ITEM_ERRORS } from '../actions/item_actions';

const itemErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    const _nullErrors = [];
    switch (action.type) {
        case RECEIVE_ITEM_ERRORS:
            return action.errors;
        default:
            return _nullErrors;
    }
};

export default itemErrorsReducer;