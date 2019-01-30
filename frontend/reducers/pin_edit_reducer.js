import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

export default function pinEditReducer(state = null, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return action.pinId || state;
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
}