import { RECEIVE_ALL_BOARDS, RECEIVE_BOARD, REMOVE_BOARD } from '../actions/board_actions'
import { merge } from 'lodash';

const BoardsReducer = (state={},action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_BOARDS:
            return merge({}, action.payload.boards);
        case RECEIVE_BOARD:
            return merge({},state,{[action.board.id]: action.board});
        case REMOVE_BOARD:
            let newState = merge({},state);
            delete newState[action.boardId];
            return newState;
        default:
            return state;
    }
}

export default BoardsReducer;
