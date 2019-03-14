import { RECEIVE_ALL_BOARDS, RECEIVE_BOARD, REMOVE_BOARD, receiveBoard } from '../../actions/board_actions';

describe('actions', () => {
    it('should create an action to receive a board', () => {
        const board = {id: 1, title: 'fashion'};
        const expectedAction = {
            type: RECEIVE_BOARD,
            board
        };
        expect(receiveBoard(board)).toEqual(expectedAction);
    });
});