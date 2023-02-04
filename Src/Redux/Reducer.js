const initialState = {
  data: [],
};
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDITEM':
      return {...state, data: action.payload};

    default:
      return state;
  }
};
