
  
  export const createItem = item => {
     return $.ajax({
      url: 'api/items',
      method: 'POST',
      data: item,
      contentType: false,
      processData: false
    })
};
  
  
 