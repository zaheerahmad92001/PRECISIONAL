const initialState = {
  Scan_Data: 66,
  Membership: [],
};

const cartItem = (state = initialState, action) => {
  switch (action.type) {
    case 'Scan_data':
      return {
        Scan_Data: [action.payload.Scan_data],
      };
    case 'ADD_TO_MCART':
      return {Membership: [...state.Membership, action.payload]};

    case 'REMOVE_FROM_CART':
      return state.cart.filter(CartItem => CartItem.Id !== action.payload.Id);
  }

  return state;
};

export default cartItem;
