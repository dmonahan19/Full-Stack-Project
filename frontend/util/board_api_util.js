
export const fetchBoards = (userId) => {
    return $.ajax({
        method: "GET",
      url: `/api/users/${userId}/boards`,
    });
};


export const fetchFollowBoards = (boardIds) => {
  return $.ajax({
    method: "GET",
    url: `/api/boards`,
    data: { boardIds }
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
  
  export const deleteBoard = (id) => {
   return $.ajax({
      url: `api/boards/${id}`,
      method: 'DELETE'
    })
};