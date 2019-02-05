import * as BoardApiUtil from '../util/board_api_util';

export const RECEIVE_ALL_BOARDS = "RECEIVE_ALL_BOARDS";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const REMOVE_BOARD = "REMOVE_BOARD";

const receiveAllBoards = payload => ({
    type: RECEIVE_ALL_BOARDS,
    payload
  });
  
  const receiveBoard = board => ({
    type: RECEIVE_BOARD,
    board
  });
  
  const removeBoard = (payload) => ({
    type: REMOVE_BOARD,
    boardId: payload.id,
    userId: payload.user_id
  });
  

  export const fetchBoards = (userId) => dispatch => (
    BoardApiUtil.fetchBoards(userId).then( boards => dispatch(receiveAllBoards(boards)))
  );
  
  export const fetchBoard = id => dispatch => (
    BoardApiUtil.fetchBoard(id).then(board => dispatch(receiveBoard(board)))
  );
  
  export const createBoard = board => dispatch => (
    BoardApiUtil.createBoard(board).then(board => dispatch(receiveBoard(board)))
  );
  
  export const updateBoard = board => dispatch => (
    BoardApiUtil.updateBoard(board).then(board => dispatch(receiveBoard(board)))
  );
  
  export const deleteBoard = (boardId) => dispatch => {
    return(
    BoardApiUtil.deleteBoard(boardId).then( (boardId) => dispatch(removeBoard(boardId))))
  };