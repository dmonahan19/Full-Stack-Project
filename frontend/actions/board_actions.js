import * as BoardApiUtil from '../util/board_api_util';

export const RECEIVE_ALL_BOARDS = "RECEIVE_ALL_BOARDS";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const REMOVE_BOARD = "REMOVE_BOARD";

const receiveAllBoards = boards => ({
    type: RECEIVE_ALL_BOARDS,
    boards
  });
  
  const receiveBoard = board => ({
    type: RECEIVE_BOARD,
    board
  });
  
  const removeBoard = boardId => ({
    type: REMOVE_BOARD,
    boardId
  });
  
  export const fetchBoards = () => dispatch => (
    BoardApiUtil.fetchBoards().then( boards => dispatch(receiveAllBoards(boards)))
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
  
  export const deleteBoard = boardId => dispatch => (
    BoardApiUtil.deleteBoard(boardId).then(board => dispatch(removeBoard(boardId)))
  );