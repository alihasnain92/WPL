// const initialState = {};

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_ITEM':
//       const { item, price } = action.payload;
//       return {
//         ...state,
//         [item]: state[item]
//           ? { ...state[item], quantity: state[item].quantity + 1 }
//           : { name: item, price, quantity: 1 },
//       };
//     case 'REMOVE_ITEM':
//       const newState = { ...state };
//       delete newState[action.payload];
//       return newState;
//     default:
//       return state;
//   }
// };

// export default cartReducer;
const initialState = {};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const { item, price } = action.payload;
      return {
        ...state,
        [item]: state[item]
          ? { ...state[item], quantity: state[item].quantity + 1 }
          : { name: item, price, quantity: 1 },
      };
    case "REMOVE_ITEM":
      const newState = { ...state };
      delete newState[action.payload];
      return newState;
    case "CLEAR_CART":
      return {};
    default:
      return state;
  }
};

export default cartReducer;
