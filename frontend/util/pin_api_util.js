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
  
  export const createPin = (pin) => (
    $.ajax({
      url: `/api/items/${pin.item_id}/pins`,
      method: 'POST',
      data: { pin }
    })
  );

  export const updatePin = (pin) => (
    $.ajax({
      url: `/api/pins/${pin.id}`,
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
  
  export const fetchUsersPins = () => (
    $.ajax({
      url: `/api/pins`,
      method: 'GET'
    })
  );