export const fetchPins = (boardId) => (
    $.ajax({
      method: 'GET',
      url: `/api/boards/${boardId}/pins`
    })
  );
  
  export const fetchUserPins = (userId) => (
    $.ajax({
      method: 'GET',
      url: `/api/users/${userId}/pins`
    })
  );
  
  
  export const fetchPin = id => (
    $.ajax({
      method: 'GET',
      url: `/api/pins/${id}`
    })
  );
  
  export const createPin = (itemId) => (
    $.ajax({
      url: `/api/items/${itemId}/pins`,
      method: 'POST',
      data: { pin }
    })
  );

  export const updatePin = (id) => (
    $.ajax({
      url: `/api/pins/${id}/`,
      method: 'PATCH',
      data: { pin }
    })
  );
  
  export const deletePin = id => (
    $.ajax({
      url: `api/pins/${id}`,
      method: 'DELETE'
    })
  );
  
//   export const fetchUsersPins = () => (
//     $.ajax({
//       url: ,
//       method: 'GET'
//     })
//   );