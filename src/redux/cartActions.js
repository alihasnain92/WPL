export const addItem = (item, price) => ({
    type: 'ADD_ITEM',
    payload: { item, price },
  });
  
  export const removeItem = (item) => ({
    type: 'REMOVE_ITEM',
    payload: item,
  });
  