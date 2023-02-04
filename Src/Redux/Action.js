export const addItemToCard = data => {
  return {
    type: 'ADDITEM',
    payload: data,
  };
};
