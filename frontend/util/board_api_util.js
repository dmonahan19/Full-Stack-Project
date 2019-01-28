export const fetchBoards = () => {
    return $.ajax({
        method: "GET",
        url: `api/boards`,
    });
};

export const fetchBoard = id => {
    return $.ajax({
      method: 'GET',
      url: `api/boards/${id}`
    })
};
  
  export const createBoard = board => {
     return $.ajax({
      url: 'api/boards',
      method: 'POST',
      data: { board }
    })
};
  
  export const updateBoard = board => {
    return $.ajax({
      url: `api/boards/${board.id}`,
      method: 'PATCH',
      data: { board }
    })
};
  
  export const deleteBoard = id => {
   return $.ajax({
      url: `api/boards/${id}`,
      method: 'DELETE'
    })
};